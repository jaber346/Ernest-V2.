const fs = require("fs");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
  makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

const config = require("./systeme/config");
const { buildHandler } = require("./handler");
const { startServer } = require("./server");
const { loadDb, saveDb } = require("./systeme/database");

fs.mkdirSync(config.SESSION_DIR, { recursive: true });

let currentSock = null;
let connectedAt = null;
let dbSaveInterval = null;
let isStarting = false;
let reconnectTimeout = null;

async function startBot() {
  if (isStarting) return currentSock;
  isStarting = true;

  try {
    const { state, saveCreds } = await useMultiFileAuthState(config.SESSION_DIR);
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
      version,
      logger: pino({ level: "silent" }),
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
      },
      browser: [config.BOT_NAME || "NOVA XMD V1", "Chrome", "1.0.0"],
      printQRInTerminal: !config.PAIRING_ENABLED,
      markOnlineOnConnect: false,
      syncFullHistory: false,
      defaultQueryTimeoutMs: 60000
    });

    currentSock = sock;

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("connection.update", async (update) => {
      try {
        const { connection, lastDisconnect, qr } = update;

        if (qr && !config.PAIRING_ENABLED) {
          console.log("📌 QR reçu dans le terminal.");
        }

        if (connection === "open") {
          connectedAt = Date.now();

          if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
            reconnectTimeout = null;
          }

          console.log(
            `✅ ${config.BOT_NAME || "Bot"} connecté en tant que ${sock.user?.id || "inconnu"}`
          );
        }

        if (connection === "close") {
          const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
          const shouldReconnect = reason !== DisconnectReason.loggedOut;

          console.log(
            "⚠️ Connexion fermée. Reconnexion :",
            shouldReconnect,
            "| raison :",
            reason
          );

          currentSock = null;
          connectedAt = null;

          if (shouldReconnect) {
            if (reconnectTimeout) clearTimeout(reconnectTimeout);

            reconnectTimeout = setTimeout(() => {
              startBot().catch((err) => {
                console.error("❌ Erreur de reconnexion :", err);
              });
            }, 3000);
          } else {
            console.log("❌ Session déconnectée. Reconnexion automatique arrêtée.");
          }
        }
      } catch (err) {
        console.error("connection.update error:", err);
      }
    });

    if (
      config.PAIRING_ENABLED &&
      !state.creds.registered &&
      config.PAIRING_NUMBER
    ) {
      try {
        const cleanNumber = String(config.PAIRING_NUMBER).replace(/\D/g, "");
        const code = await sock.requestPairingCode(cleanNumber);
        console.log(`🔐 Pairing code pour ${cleanNumber}: ${code}`);
      } catch (err) {
        console.error("❌ Erreur pairing code :", err);
      }
    }

    const handler = buildHandler(sock);

    sock.ev.on("messages.upsert", async ({ messages, type }) => {
      try {
        if (!messages || !Array.isArray(messages)) return;
        if (type !== "notify" && type !== "append") return;

        for (const m of messages) {
          if (!m) continue;
          if (m.key?.remoteJid === "status@broadcast") continue;

          try {
            await handler(m);
          } catch (err) {
            console.error("message handler error:", err);
          }
        }
      } catch (err) {
        console.error("messages.upsert error:", err);
      }
    });

    sock.ev.on("group-participants.update", async (data) => {
      try {
        const db = loadDb() || {};
        const groups = db.groups || {};
        const group = groups[data.id];

        if (!group) return;

        const mentions = Array.isArray(data.participants) ? data.participants : [];
        const tags = mentions.map((p) => `@${p.split("@")[0]}`).join(", ");

        if (data.action === "add" && group.welcome) {
          await sock.sendMessage(data.id, {
            text: `👋 Bienvenue ${tags} dans le groupe !`,
            mentions
          });
        }

        if (data.action === "remove" && group.goodbye) {
          await sock.sendMessage(data.id, {
            text: `👋 Au revoir ${tags}.`,
            mentions
          });
        }
      } catch (error) {
        console.error("participant update error:", error);
      }
    });

    if (dbSaveInterval) clearInterval(dbSaveInterval);
    dbSaveInterval = setInterval(() => {
      try {
        saveDb();
      } catch (err) {
        console.error("saveDb interval error:", err);
      }
    }, 30000);

    return sock;
  } catch (error) {
    console.error("❌ Erreur startBot :", error);
    throw error;
  } finally {
    isStarting = false;
  }
}

startServer(() => {
  const db = loadDb() || {};
  const settings = db.settings || {};

  return {
    connected: !!currentSock?.user,
    user: currentSock?.user || null,
    connectedAt,
    uptime: connectedAt ? Date.now() - connectedAt : 0,
    mode: settings.public ? "public" : "private"
  };
});

startBot().catch((err) => {
  console.error("❌ Erreur lancement bot :", err);
});
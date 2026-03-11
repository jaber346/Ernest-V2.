const config = require('./systeme/config');
const messages = require('./systeme/messages');
const { loadCommands } = require('./lib/commandLoader');
const { runtime, parseMention } = require('./lib/utils');
const { getGroup, getUser, saveDb, loadDb } = require('./systeme/database');

function normalizeJid(jid = '') {
  return String(jid || '').replace(/:\d+@/, '@');
}

async function buildContext(sock, m) {
  const from = m.key.remoteJid;
  const sender = normalizeJid(m.key.participant || m.key.remoteJid || '');
  const pushName = m.pushName || 'Utilisateur';
  const isGroup = from.endsWith('@g.us');
  const text = m.message?.conversation
    || m.message?.extendedTextMessage?.text
    || m.message?.imageMessage?.caption
    || m.message?.videoMessage?.caption
    || m.message?.buttonsResponseMessage?.selectedButtonId
    || m.message?.listResponseMessage?.singleSelectReply?.selectedRowId
    || '';

  let metadata = null;
  let participants = [];
  let admins = [];
  let isAdmin = false;
  let isBotAdmin = false;

  if (isGroup) {
    metadata = await sock.groupMetadata(from).catch(() => null);
    participants = metadata?.participants || [];
    admins = participants.filter((p) => ['admin', 'superadmin'].includes(p.admin)).map((p) => normalizeJid(p.id));
    isAdmin = admins.includes(sender);
    isBotAdmin = admins.includes(normalizeJid(sock.user.id));
  }

  const db = loadDb();
  const groupData = isGroup ? getGroup(from) : null;
  const userData = getUser(sender);

  return {
    from,
    sender,
    pushName,
    isGroup,
    text,
    body: text,
    args: text.trim().split(/\s+/).slice(1),
    metadata,
    participants,
    admins,
    isAdmin,
    isBotAdmin,
    isOwner: sender.startsWith(config.OWNER_NUMBER),
    prefix: db.settings?.prefix || config.PREFIX,
    groupData,
    userData,
    mentionedJid: parseMention(text),
    reply: (msg, extra = {}) => sock.sendMessage(from, { text: msg, ...extra }, { quoted: m })
  };
}

async function handleAfk(sock, m, ctx) {
  if (ctx.userData.afk) {
    ctx.userData.afk = false;
    ctx.userData.afkReason = '';
    ctx.userData.afkSince = 0;
    saveDb();
    await ctx.reply(`✅ Bon retour ${ctx.pushName}, mode AFK désactivé.`);
  }

  if (ctx.mentionedJid.length) {
    for (const jid of ctx.mentionedJid) {
      const user = getUser(jid);
      if (user.afk) {
        const since = runtime(user.afkSince);
        await ctx.reply(`ℹ️ @${jid.split('@')[0]} est AFK depuis ${since}${user.afkReason ? `\n📝 Raison : ${user.afkReason}` : ''}`, {
          mentions: [jid]
        });
      }
    }
  }
}

async function handleAntiLink(sock, m, ctx) {
  if (!ctx.isGroup || !ctx.groupData?.antilink || ctx.isAdmin) return;
  const text = ctx.text || '';
  if (!/chat\.whatsapp\.com\//i.test(text)) return;
  if (!ctx.isBotAdmin) return ctx.reply('⚠️ L’antilink est actif mais je ne suis pas admin.');

  await ctx.reply(`🚫 Lien de groupe détecté. @${ctx.sender.split('@')[0]} sera retiré.`, { mentions: [ctx.sender] });
  await sock.groupParticipantsUpdate(ctx.from, [ctx.sender], 'remove').catch(() => null);
}

async function handleMuted(ctx) {
  if (!ctx.isGroup || !ctx.groupData?.mute) return false;
  const isCmd = ctx.text.startsWith(ctx.prefix);
  if (isCmd && !ctx.isAdmin && !ctx.isOwner) {
    await ctx.reply('🔇 Le bot est en mode muet dans ce groupe.');
    return true;
  }
  return false;
}

function buildHandler(sock) {
  const commandsPath = require('path').join(__dirname, 'commands');
  let loaded = loadCommands(commandsPath);

  function reload() {
    loaded = loadCommands(commandsPath);
    return loaded;
  }

  return async function handler(m) {
    try {
      if (!m?.message) return;
      if (m.key?.remoteJid === 'status@broadcast') return;
      if (m.key?.fromMe && !config.PUBLIC_MODE) return;

      const ctx = await buildContext(sock, m);
      await handleAfk(sock, m, ctx);
      await handleAntiLink(sock, m, ctx);
      if (await handleMuted(ctx)) return;

      const prefix = ctx.prefix;
      if (!ctx.text.startsWith(prefix)) return;

      const [rawName] = ctx.text.slice(prefix.length).trim().split(/\s+/);
      if (!rawName) return;
      const name = rawName.toLowerCase();
      const commandName = loaded.aliases.get(name) || name;
      const command = loaded.commands.get(commandName);
      if (!command) return;

      if (!loadDb().settings.public && !ctx.isOwner) {
        return ctx.reply('🔒 Le bot est actuellement en mode privé.');
      }
      if (command.owner && !ctx.isOwner) return ctx.reply(messages.onlyOwner);
      if (command.group && !ctx.isGroup) return ctx.reply(messages.onlyGroup);
      if (command.private && ctx.isGroup) return ctx.reply(messages.onlyPrivate);
      if (command.admin && !ctx.isAdmin && !ctx.isOwner) return ctx.reply(messages.onlyAdmin);
      if (command.botAdmin && !ctx.isBotAdmin) return ctx.reply(messages.onlyBotAdmin);

      loadDb().stats.commands += 1;
      saveDb();

      await command.execute(sock, m, ctx, { reload, commands: loaded.commands, aliases: loaded.aliases });
    } catch (error) {
      console.error('Handler error:', error);
      try {
        await sock.sendMessage(m.key.remoteJid, { text: `${messages.error}\n\n${error.message || error}` }, { quoted: m });
      } catch {}
    }
  };
}

module.exports = { buildHandler, normalizeJid };

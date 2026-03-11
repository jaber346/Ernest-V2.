const fs = require('fs');
const path = require('path');
const config = require('./config');

const dbFile = path.join(config.DATA_DIR, 'database.json');

const defaultDb = () => ({
  groups: {},
  users: {},
  settings: {
    prefix: config.PREFIX,
    public: config.PUBLIC_MODE
  },
  stats: {
    startAt: Date.now(),
    commands: 0
  }
});

function ensureDb() {
  fs.mkdirSync(config.DATA_DIR, { recursive: true });
  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify(defaultDb(), null, 2));
  }
}

function loadDb() {
  ensureDb();
  try {
    const raw = fs.readFileSync(dbFile, 'utf8');
    return { ...defaultDb(), ...JSON.parse(raw) };
  } catch (error) {
    return defaultDb();
  }
}

let db = loadDb();

function saveDb() {
  fs.mkdirSync(config.DATA_DIR, { recursive: true });
  fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
}

function getGroup(chatId) {
  if (!db.groups[chatId]) {
    db.groups[chatId] = {
      welcome: false,
      goodbye: false,
      antilink: false,
      mute: false,
      warnings: {}
    };
    saveDb();
  }
  return db.groups[chatId];
}

function getUser(jid) {
  if (!db.users[jid]) {
    db.users[jid] = {
      afk: false,
      afkReason: '',
      afkSince: 0,
      balance: 0,
      xp: 0
    };
    saveDb();
  }
  return db.users[jid];
}

function resetDb() {
  db = defaultDb();
  saveDb();
  return db;
}

module.exports = { db, saveDb, getGroup, getUser, resetDb, loadDb: () => db };

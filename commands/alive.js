
const config = require('../systeme/config');
const { loadDb } = require('../systeme/database');
const { runtime } = require('../lib/utils');

module.exports = {
  name: 'alive',
  aliases: ['online', 'test'],
  category: 'general',
  desc: 'Vérifie si le bot est en ligne.',
  async execute(sock, m, ctx) {
    const db = loadDb();
    await ctx.reply(`✅ ${config.BOT_NAME} est bien en ligne.\n⏱️ Uptime: ${runtime(db.stats.startAt)}\n🔐 Mode: ${db.settings.public ? 'public' : 'privé'}`);
  }
};

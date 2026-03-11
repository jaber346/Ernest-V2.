
const { loadDb, saveDb } = require('../systeme/database');
module.exports = {
  name: 'mode',
  aliases: ['public', 'private'],
  category: 'owner',
  desc: 'Change le mode public ou privé.',
  owner: true,
  async execute(sock, m, ctx) {
    const db = loadDb();
    const value = (ctx.args[0] || '').toLowerCase();
    if (!['public', 'private'].includes(value)) {
      return ctx.reply(`Mode actuel: ${db.settings.public ? 'public' : 'private'}\nUtilisation: ${ctx.prefix}mode public|private`);
    }
    db.settings.public = value === 'public';
    saveDb();
    await ctx.reply(`✅ Mode changé en ${value}.`);
  }
};


const { getGroup, saveDb } = require('../systeme/database');
module.exports = {
  name: 'mute',
  aliases: [],
  category: 'group',
  desc: 'Met le bot en mode muet dans le groupe.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const g = getGroup(ctx.from);
    g.mute = true;
    saveDb();
    await ctx.reply('🔇 Bot muet dans ce groupe.');
  }
};

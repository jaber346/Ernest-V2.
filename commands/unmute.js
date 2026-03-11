
const { getGroup, saveDb } = require('../systeme/database');
module.exports = {
  name: 'unmute',
  aliases: [],
  category: 'group',
  desc: 'Retire le mode muet du bot dans le groupe.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const g = getGroup(ctx.from);
    g.mute = false;
    saveDb();
    await ctx.reply('🔊 Bot réactivé dans ce groupe.');
  }
};

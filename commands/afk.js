
const { getUser, saveDb } = require('../systeme/database');
module.exports = {
  name: 'afk',
  aliases: [],
  category: 'utility',
  desc: 'Active le mode AFK.',
  async execute(sock, m, ctx) {
    const user = getUser(ctx.sender);
    user.afk = true;
    user.afkReason = ctx.args.join(' ');
    user.afkSince = Date.now();
    saveDb();
    await ctx.reply(`💤 AFK activé${user.afkReason ? `: ${user.afkReason}` : '.'}`);
  }
};

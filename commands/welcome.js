
const { getGroup, saveDb } = require('../systeme/database');
module.exports = {
  name: 'welcome',
  aliases: [],
  category: 'group',
  desc: 'Active ou désactive les messages de bienvenue.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const g = getGroup(ctx.from);
    const opt = (ctx.args[0] || '').toLowerCase();
    if (!['on','off'].includes(opt)) return ctx.reply(`Utilisation: ${ctx.prefix}welcome on|off`);
    g.welcome = opt === 'on';
    saveDb();
    await ctx.reply(`✅ Welcome ${opt}.`);
  }
};

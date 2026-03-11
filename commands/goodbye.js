
const { getGroup, saveDb } = require('../systeme/database');
module.exports = {
  name: 'goodbye',
  aliases: ['bye'],
  category: 'group',
  desc: 'Active ou désactive les messages d’au revoir.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const g = getGroup(ctx.from);
    const opt = (ctx.args[0] || '').toLowerCase();
    if (!['on','off'].includes(opt)) return ctx.reply(`Utilisation: ${ctx.prefix}goodbye on|off`);
    g.goodbye = opt === 'on';
    saveDb();
    await ctx.reply(`✅ Goodbye ${opt}.`);
  }
};

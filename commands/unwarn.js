
const { getGroup, saveDb } = require('../systeme/database');
module.exports = {
  name: 'unwarn',
  aliases: ['resetwarn'],
  category: 'group',
  desc: 'Supprime les avertissements d’un membre.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const target = ctx.mentionedJid[0];
    if (!target) return ctx.reply(`Utilisation: ${ctx.prefix}unwarn @membre`);
    const g = getGroup(ctx.from);
    g.warnings[target] = 0;
    saveDb();
    await ctx.reply(`✅ Warnings supprimés pour @${target.split('@')[0]}.`, { mentions: [target] });
  }
};

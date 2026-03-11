
const { getGroup } = require('../systeme/database');
module.exports = {
  name: 'warns',
  aliases: ['checkwarn'],
  category: 'group',
  desc: 'Affiche les avertissements.',
  group: true,
  async execute(sock, m, ctx) {
    const g = getGroup(ctx.from);
    const target = ctx.mentionedJid[0] || ctx.sender;
    const count = g.warnings[target] || 0;
    await ctx.reply(`⚠️ @${target.split('@')[0]} possède ${count} avertissement(s).`, { mentions: [target] });
  }
};

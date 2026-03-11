
const config = require('../systeme/config');
const { getGroup, saveDb } = require('../systeme/database');
module.exports = {
  name: 'warn',
  aliases: [],
  category: 'group',
  desc: 'Avertit un membre.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const target = ctx.mentionedJid[0];
    if (!target) return ctx.reply(`Utilisation: ${ctx.prefix}warn @membre raison`);
    if (ctx.admins.includes(target)) return ctx.reply('❌ Impossible d’avertir un admin.');
    const g = getGroup(ctx.from);
    g.warnings[target] = (g.warnings[target] || 0) + 1;
    saveDb();
    const count = g.warnings[target];
    const reason = ctx.args.slice(1).join(' ') || 'Aucune raison';
    if (count >= config.MAX_WARNS) {
      await ctx.reply(`🚫 @${target.split('@')[0]} a atteint ${count} avertissements et sera retiré.
📝 Raison: ${reason}`, { mentions: [target] });
      g.warnings[target] = 0;
      saveDb();
      await sock.groupParticipantsUpdate(ctx.from, [target], 'remove').catch(() => null);
      return;
    }
    await ctx.reply(`⚠️ @${target.split('@')[0]} a maintenant ${count}/${config.MAX_WARNS} avertissements.
📝 Raison: ${reason}`, { mentions: [target] });
  }
};

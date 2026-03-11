
module.exports = {
  name: 'promote',
  aliases: [],
  category: 'group',
  desc: 'Promeut un membre.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const target = ctx.mentionedJid[0];
    if (!target) return ctx.reply(`Utilisation: ${ctx.prefix}promote @membre`);
    await sock.groupParticipantsUpdate(ctx.from, [target], 'promote');
    await ctx.reply(`✅ @${target.split('@')[0]} est maintenant admin.`, { mentions: [target] });
  }
};

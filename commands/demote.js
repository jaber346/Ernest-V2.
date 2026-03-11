
module.exports = {
  name: 'demote',
  aliases: [],
  category: 'group',
  desc: 'Rétrograde un admin.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const target = ctx.mentionedJid[0];
    if (!target) return ctx.reply(`Utilisation: ${ctx.prefix}demote @membre`);
    await sock.groupParticipantsUpdate(ctx.from, [target], 'demote');
    await ctx.reply(`✅ @${target.split('@')[0]} n’est plus admin.`, { mentions: [target] });
  }
};

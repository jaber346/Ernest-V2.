
module.exports = {
  name: 'kick',
  aliases: ['remove'],
  category: 'group',
  desc: 'Retire un membre du groupe.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const target = ctx.mentionedJid[0];
    if (!target) return ctx.reply(`Utilisation: ${ctx.prefix}kick @membre`);
    if (ctx.admins.includes(target)) return ctx.reply('❌ Impossible de retirer un admin.');
    await sock.groupParticipantsUpdate(ctx.from, [target], 'remove');
    await ctx.reply(`👢 @${target.split('@')[0]} a été retiré.`, { mentions: [target] });
  }
};

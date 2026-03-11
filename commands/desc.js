
module.exports = {
  name: 'desc',
  aliases: ['setdescgc'],
  category: 'group',
  desc: 'Change la description du groupe.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}desc nouvelle description`);
    await sock.groupUpdateDescription(ctx.from, text);
    await ctx.reply('✅ Description du groupe modifiée.');
  }
};

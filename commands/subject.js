
module.exports = {
  name: 'subject',
  aliases: ['setnamegc'],
  category: 'group',
  desc: 'Change le nom du groupe.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}subject nouveau nom`);
    await sock.groupUpdateSubject(ctx.from, text);
    await ctx.reply('✅ Nom du groupe modifié.');
  }
};


module.exports = {
  name: 'upper',
  aliases: ['uppercase'],
  category: 'utility',
  desc: 'Met le texte en majuscule.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}upper texte`);
    await ctx.reply(text.toUpperCase());
  }
};

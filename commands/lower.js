
module.exports = {
  name: 'lower',
  aliases: ['lowercase'],
  category: 'utility',
  desc: 'Met le texte en minuscule.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}lower TEXTE`);
    await ctx.reply(text.toLowerCase());
  }
};

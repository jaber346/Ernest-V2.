module.exports = {
  name: 'kebab',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en kebab-case',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}kebab bonjour monde`);
    await ctx.reply(text.trim().toLowerCase().replace(/\s+/g, "-"));
  }
};

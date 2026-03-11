module.exports = {
  name: 'snake',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en snake_case',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}snake bonjour monde`);
    await ctx.reply(text.trim().toLowerCase().replace(/\s+/g, "_"));
  }
};

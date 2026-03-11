module.exports = {
  name: 'camel',
  aliases: [],
  category: 'textstyle',
  desc: 'Texte en camelCase',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}camel bonjour monde`);
    const parts = text.trim().toLowerCase().split(/\s+/);
    await ctx.reply(parts[0] + parts.slice(1).map(w => w[0].toUpperCase()+w.slice(1)).join(""));
  }
};

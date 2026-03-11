module.exports = {
  name: 'first',
  aliases: [],
  category: 'utility',
  desc: 'Premier mot du texte',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}first bonjour monde`);
    await ctx.reply(text.trim().split(/\s+/)[0]);
  }
};

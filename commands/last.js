module.exports = {
  name: 'last',
  aliases: [],
  category: 'utility',
  desc: 'Dernier mot du texte',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}last bonjour monde`);
    const parts = text.trim().split(/\s+/);
    await ctx.reply(parts[parts.length - 1]);
  }
};

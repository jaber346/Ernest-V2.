module.exports = {
  name: 'charcode',
  aliases: [],
  category: 'utility',
  desc: 'Convertit le texte en codes caractères',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}charcode salut`);
    await ctx.reply(text.split("").map(c => c.charCodeAt(0)).join(" "));
  }
};

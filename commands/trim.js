module.exports = {
  name: 'trim',
  aliases: [],
  category: 'utility',
  desc: 'Supprime les espaces',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}trim    texte   `);
    await ctx.reply(text.trim());
  }
};

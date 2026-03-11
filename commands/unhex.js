module.exports = {
  name: 'unhex',
  aliases: [],
  category: 'utility',
  desc: 'Décode le hex en texte',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}unhex 73616c7574`);
    await ctx.reply(Buffer.from(text, "hex").toString("utf8"));
  }
};

module.exports = {
  name: 'ascii',
  aliases: [],
  category: 'textstyle',
  desc: 'Espacement ASCII simple',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}ascii bonjour`);
    await ctx.reply(text.split("").join(" "));
  }
};

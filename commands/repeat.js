module.exports = {
  name: 'repeat',
  aliases: [],
  category: 'utility',
  desc: 'Répète plusieurs fois',
  async execute(sock, m, ctx) {
    const times = Math.min(10, Number(ctx.args[0] || 1));
    const text = ctx.args.slice(1).join(" ");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}repeat 3 salut`);
    await ctx.reply(Array(times).fill(text).join("\n"));
  }
};

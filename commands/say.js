
module.exports = {
  name: 'say',
  aliases: ['echo'],
  category: 'utility',
  desc: 'Répète ton message.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}say bonjour`);
    await ctx.reply(text);
  }
};

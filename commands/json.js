
module.exports = {
  name: 'json',
  aliases: ['prettify'],
  category: 'utility',
  desc: 'Formate un JSON.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}json {"a":1}`);
    const parsed = JSON.parse(text);
    await ctx.reply(JSON.stringify(parsed, null, 2));
  }
};

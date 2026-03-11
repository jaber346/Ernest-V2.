
module.exports = {
  name: 'urldec',
  aliases: ['decodeurl'],
  category: 'utility',
  desc: 'Décode une URL.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}urldec bonjour%20monde`);
    await ctx.reply(decodeURIComponent(text));
  }
};

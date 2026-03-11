
module.exports = {
  name: 'flip',
  aliases: ['coin'],
  category: 'fun',
  desc: 'Pile ou face.',
  async execute(sock, m, ctx) {
    await ctx.reply(Math.random() < 0.5 ? '🪙 Pile' : '🪙 Face');
  }
};

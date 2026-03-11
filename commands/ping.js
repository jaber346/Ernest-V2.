
module.exports = {
  name: 'ping',
  aliases: ['speed', 'latency'],
  category: 'general',
  desc: 'Mesure la latence du bot.',
  async execute(sock, m, ctx) {
    const start = Date.now();
    await ctx.reply(`🏓 Pong !\n⚡ Latence: ${Date.now() - start} ms`);
  }
};

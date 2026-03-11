
module.exports = {
  name: 'timestamp',
  aliases: ['unix'],
  category: 'utility',
  desc: 'Affiche le timestamp actuel.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🕒 Timestamp: ${Date.now()}`);
  }
};

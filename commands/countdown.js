
module.exports = {
  name: 'countdown',
  aliases: ['cd'],
  category: 'utility',
  desc: 'Compte à rebours simple.',
  async execute(sock, m, ctx) {
    const sec = Number(ctx.args[0] || 10);
    await ctx.reply(`⏳ Compte à rebours: ${sec} seconde(s).`);
  }
};

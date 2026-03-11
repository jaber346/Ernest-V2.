
module.exports = {
  name: 'myname',
  aliases: [],
  category: 'utility',
  desc: 'Affiche ton nom détecté.',
  async execute(sock, m, ctx) {
    await ctx.reply(`👤 Ton nom: ${ctx.pushName}`);
  }
};

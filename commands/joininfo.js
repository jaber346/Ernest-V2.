module.exports = {
  name: 'joininfo',
  aliases: [],
  category: 'general',
  desc: 'Infos pour ajouter le bot',
  async execute(sock, m, ctx) {
    await ctx.reply("➕ Ajoute le bot dans un groupe puis donne-lui les permissions admin si besoin.");
  }
};

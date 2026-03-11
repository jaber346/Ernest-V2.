
module.exports = {
  name: 'about',
  aliases: [],
  category: 'general',
  desc: 'À propos du projet.',
  async execute(sock, m, ctx) {
    await ctx.reply('NOVA XMD V1 est un bot WhatsApp modulaire orienté stabilité, gestion de groupes et utilitaires.');
  }
};

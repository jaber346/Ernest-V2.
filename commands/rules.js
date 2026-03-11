module.exports = {
  name: 'rules',
  aliases: ['regles'],
  category: 'general',
  desc: 'Affiche les règles du bot.',
  async execute(sock, m, ctx) {
    await ctx.reply('📜 Règles:\n1. Respecter les membres.\n2. Éviter le spam.\n3. Utiliser les commandes correctement.\n4. Les admins restent protégés.');
  }
};

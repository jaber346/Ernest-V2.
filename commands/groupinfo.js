
module.exports = {
  name: 'groupinfo',
  aliases: ['gcinfo'],
  category: 'group',
  desc: 'Infos du groupe.',
  group: true,
  async execute(sock, m, ctx) {
    const md = ctx.metadata;
    await ctx.reply(`🏷️ Nom: ${md.subject}\n🆔 ID: ${ctx.from}\n👥 Membres: ${ctx.participants.length}\n📝 Description: ${md.desc || 'Aucune'}`);
  }
};

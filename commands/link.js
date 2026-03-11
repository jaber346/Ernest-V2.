
module.exports = {
  name: 'link',
  aliases: ['grouplink'],
  category: 'group',
  desc: 'Affiche le lien du groupe.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const code = await sock.groupInviteCode(ctx.from);
    await ctx.reply(`🔗 https://chat.whatsapp.com/${code}`);
  }
};

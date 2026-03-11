
module.exports = {
  name: 'close',
  aliases: [],
  category: 'group',
  desc: 'Ferme le groupe aux admins seulement.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    await sock.groupSettingUpdate(ctx.from, 'announcement');
    await ctx.reply('✅ Groupe fermé.');
  }
};

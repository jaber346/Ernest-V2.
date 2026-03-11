
module.exports = {
  name: 'open',
  aliases: [],
  category: 'group',
  desc: 'Ouvre le groupe aux messages.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    await sock.groupSettingUpdate(ctx.from, 'not_announcement');
    await ctx.reply('✅ Groupe ouvert.');
  }
};


module.exports = {
  name: 'members',
  aliases: ['countmember'],
  category: 'group',
  desc: 'Compte les membres du groupe.',
  group: true,
  async execute(sock, m, ctx) {
    await ctx.reply(`👥 Membres: ${ctx.participants.length}\n👮 Admins: ${ctx.admins.length}`);
  }
};

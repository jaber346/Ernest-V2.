
module.exports = {
  name: 'support',
  aliases: [],
  category: 'general',
  desc: 'Contact support.',
  async execute(sock, m, ctx) {
    await ctx.reply('🆘 Support: contacte le propriétaire du bot pour toute configuration avancée.');
  }
};

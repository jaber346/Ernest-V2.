
module.exports = {
  name: 'jid',
  aliases: ['id'],
  category: 'utility',
  desc: 'Affiche les JID utiles.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🆔 Chat: ${ctx.from}\n👤 Sender: ${ctx.sender}`);
  }
};

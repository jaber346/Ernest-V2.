
module.exports = {
  name: 'mention',
  aliases: ['tagme'],
  category: 'utility',
  desc: 'Mentionne l’utilisateur.',
  async execute(sock, m, ctx) {
    await sock.sendMessage(ctx.from, { text: `👋 Salut @${ctx.sender.split('@')[0]}`, mentions: [ctx.sender] }, { quoted: m });
  }
};

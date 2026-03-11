module.exports = {
  name: 'admins',
  aliases: [],
  category: 'group',
  desc: 'Liste les admins du groupe.',
  group: true,
  async execute(sock, m, ctx) {
    const text = ctx.admins.map((jid, i) => `${i + 1}. @${jid.split('@')[0]}`).join('\n') || 'Aucun admin trouvé.';
    await sock.sendMessage(ctx.from, { text: `👮 Admins du groupe:\n\n${text}`, mentions: ctx.admins }, { quoted: m });
  }
};

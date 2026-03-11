
module.exports = {
  name: 'hidetag',
  aliases: ['htag'],
  category: 'group',
  desc: 'Envoie un message en mentionnant tout le monde discrètement.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ') || 'Message sans texte';
    await sock.sendMessage(ctx.from, { text, mentions: ctx.participants.map(p => p.id) }, { quoted: m });
  }
};

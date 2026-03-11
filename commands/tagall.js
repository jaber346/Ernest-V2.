
module.exports = {
  name: 'tagall',
  aliases: ['hidetagall'],
  category: 'group',
  desc: 'Mentionne tous les membres.',
  group: true,
  admin: true,
  async execute(sock, m, ctx) {
    const mentions = ctx.participants.map(p => p.id);
    const text = `📢 Tag All\n\n${ctx.participants.map((p, i) => `${i+1}. @${p.id.split('@')[0]}`).join('\n')}`;
    await sock.sendMessage(ctx.from, { text, mentions }, { quoted: m });
  }
};


module.exports = {
  name: 'add',
  aliases: [],
  category: 'group',
  desc: 'Ajoute un membre dans le groupe.',
  group: true,
  admin: true,
  botAdmin: true,
  async execute(sock, m, ctx) {
    const num = (ctx.args[0] || '').replace(/\D/g, '');
    if (!num) return ctx.reply(`Utilisation: ${ctx.prefix}add 226xxxxxxxx`);
    const jid = `${num}@s.whatsapp.net`;
    await sock.groupParticipantsUpdate(ctx.from, [jid], 'add');
    await ctx.reply(`✅ Invitation envoyée à @${num}.`, { mentions: [jid] });
  }
};

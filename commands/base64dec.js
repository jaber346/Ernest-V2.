
module.exports = {
  name: 'base64dec',
  aliases: ['b64d'],
  category: 'utility',
  desc: 'Décode une Base64.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}base64dec dGV4dGU=`);
    await ctx.reply(Buffer.from(text, 'base64').toString('utf8'));
  }
};


module.exports = {
  name: 'base64enc',
  aliases: ['b64e'],
  category: 'utility',
  desc: 'Encode en Base64.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}base64enc texte`);
    await ctx.reply(Buffer.from(text).toString('base64'));
  }
};


module.exports = {
  name: 'binary',
  aliases: ['tobinary'],
  category: 'utility',
  desc: 'Transforme un texte en binaire.',
  async execute(sock, m, ctx) {
    const text = ctx.args.join(' ');
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}binary salut`);
    await ctx.reply(text.split('').map(c => c.charCodeAt(0).toString(2)).join(' '));
  }
};

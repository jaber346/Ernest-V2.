module.exports = {
  name: 'palindrome',
  aliases: [],
  category: 'fun',
  desc: 'Teste si un mot est un palindrome',
  async execute(sock, m, ctx) {
    const text = ctx.args.join("").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!text) return ctx.reply(`Utilisation: ${ctx.prefix}palindrome kayak`);
    await ctx.reply(text === text.split("").reverse().join("") ? "✅ Palindrome" : "❌ Pas un palindrome");
  }
};

const config = require('../systeme/config');

module.exports = {
  name: 'menu',
  aliases: ['help', 'cmd', 'allmenu'],
  category: 'general',
  desc: 'Affiche le menu complet des commandes.',
  async execute(sock, m, ctx, { commands }) {
    const byCat = {};
    for (const command of commands.values()) {
      const cat = command.category || 'other';
      if (!byCat[cat]) byCat[cat] = [];
      byCat[cat].push(command.name);
    }
    const lines = [
      `╔═══〔 ${config.BOT_NAME} 〕═══⬣`,
      `👤 Utilisateur : ${ctx.pushName}`,
      `🔑 Préfixe : ${ctx.prefix}`,
      `📦 Total commandes : ${commands.size}`,
      '╚════════════════════⬣',
      ''
    ];
    for (const [cat, items] of Object.entries(byCat).sort()) {
      lines.push(`┏━〔 ${cat.toUpperCase()} 〕`);
      lines.push(`┃ ${items.sort().join(', ')}`);
      lines.push('┗━━━━━━━━━━━━━━');
    }
    await ctx.reply(lines.join('\n'));
  }
};

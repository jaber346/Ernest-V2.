
const os = require('os');
module.exports = {
  name: 'status',
  aliases: ['systeminfo'],
  category: 'general',
  desc: 'Affiche les infos système.',
  async execute(sock, m, ctx) {
    await ctx.reply(`🖥️ Plateforme: ${os.platform()}\n📡 Hostname: ${os.hostname()}\n💾 RAM libre: ${(os.freemem()/1024/1024).toFixed(0)} MB\n🧠 RAM totale: ${(os.totalmem()/1024/1024).toFixed(0)} MB\n⚙️ CPU: ${os.cpus()[0]?.model || 'N/A'}`);
  }
};

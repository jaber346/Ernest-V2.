const express = require('express');
const path = require('path');
const config = require('./systeme/config');
const { loadDb } = require('./systeme/database');

function startServer(getBotState) {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname)));

  app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get('/api/status', (_, res) => {
    const db = loadDb();
    res.json({
      ok: true,
      bot: getBotState(),
      stats: db.stats,
      settings: db.settings
    });
  });

  app.get('/health', (_, res) => res.send('ok'));

  app.listen(config.PORT, () => {
    console.log(`🌐 Web server running on http://localhost:${config.PORT}`);
  });
}

module.exports = { startServer };

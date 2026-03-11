function toMs(ms = 0) {
  ms = Number(ms || 0);
  const d = Math.floor(ms / 86400000);
  const h = Math.floor(ms / 3600000) % 24;
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [d ? `${d}j` : '', h ? `${h}h` : '', m ? `${m}m` : '', `${s}s`].filter(Boolean).join(' ');
}

function pick(arr = []) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isUrl(text = '') {
  return /^https?:\/\//i.test(String(text).trim());
}

function formatNumber(value = 0) {
  return new Intl.NumberFormat('fr-FR').format(Number(value || 0));
}

function runtime(startAt) {
  return toMs(Date.now() - Number(startAt || Date.now()));
}

function parseMention(text = '') {
  return [...text.matchAll(/@([0-9]{5,20})/g)].map((x) => `${x[1]}@s.whatsapp.net`);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chunk(arr = [], size = 10) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function toTitleCase(text = '') {
  return String(text)
    .toLowerCase()
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

module.exports = {
  toMs,
  pick,
  isUrl,
  formatNumber,
  runtime,
  parseMention,
  getRandomInt,
  chunk,
  toTitleCase
};

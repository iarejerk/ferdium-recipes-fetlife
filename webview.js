const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let count = 0;

    const selectors = [
      'div.bg-red-700'
    ];

    const safeParseInt = s => {
      if (!s && s !== 0) return 0;
      const n = parseInt(String(s).trim().replace(/[^0-9-]/g, ''), 10);
      return Number.isNaN(n) ? 0 : n;
    };

    const allMatches = selectors.flatMap(sel => [...document.querySelectorAll(sel)]);

    for (const el of allMatches) {
      const text = (el.textContent || el.innerText || '').trim();
      if (text) {
        count += safeParseInt(text);
      }
    }

    Ferdi.setBadge(count > 100 ? '99+' : count);
  };

  window.addEventListener('beforeunload', async () => {
    Ferdium.releaseServiceWorkers();
  });

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'style.css'));
};
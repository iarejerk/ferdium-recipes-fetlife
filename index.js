module.exports = Ferdi =>
  class Fetlife extends Ferdi {
    async validateUrl(url) {
      return url.includes('fetlife.com');
    }
    overrideUserAgent() {
      return window.navigator.userAgent.replace(/(Ferdi|Electron)\/\S+ \([^)]+\)/g, '').trim();
    }
  };

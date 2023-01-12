const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdi => {
  Ferdi.injectCSS(_path.default.join(__dirname, 'style.css'));

  const getMessages = function getMessages() {
    let count = 0;

    // Read from the inbox icon in the top navigation
    const notificationEl = document.querySelector('span[data-inbox-count] div');
    if (!!notificationEl) {
      count = notificationEl.innerText;
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Ferdi.setBadge(count);
  };

  Ferdi.loop(getMessages);
};
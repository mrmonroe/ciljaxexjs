const path = require('path');

function getView(filename) {
  return path.join(__dirname, filename);
}

module.exports = { getView };

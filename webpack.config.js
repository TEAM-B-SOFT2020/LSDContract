const path = require('path');

module.exports = {
  entry: './docs/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
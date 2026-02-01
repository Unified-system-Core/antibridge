const path = require('path');

module.exports = {
  entry: './frontend/js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'frontend/dist'),
  },
  mode: 'production'
};

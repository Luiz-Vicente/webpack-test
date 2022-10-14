const path = require('path'); // biblioteca do node.js

module.exports = {
  entry: './src/main.js',
  output: {
          // base do diretório
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
}
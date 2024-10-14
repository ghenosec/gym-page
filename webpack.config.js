const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/, 
        use: 'file-loader', 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], 
  },
  entry: './src/index.tsx', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
};

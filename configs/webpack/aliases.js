const path = require('path');

module.exports = () => ({
  resolve: {
    alias: {
      longPath: path.resolve(__dirname, '..', '..', 'the', 'very', 'long', 'path'),
    },
    modules: [
      path.resolve(__dirname, '..', '..'),
      'node_modules',
    ],
  },
});

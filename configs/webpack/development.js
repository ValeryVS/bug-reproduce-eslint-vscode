/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');

const common = require('./common');
const aliases = require('./aliases');

module.exports = () => [
  merge(common()),
  merge(common(), aliases()),
];

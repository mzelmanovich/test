const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  test: Sequelize.string
};

const Test = conn.define('test',attrs);

module.exports = Test;
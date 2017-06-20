const conn = require('./conn');
const Tests = require('./Test');

const sync = force => conn.sync({ force });

const seed = (force) =>  sync(force);

module.exports = {
  sync,
  seed,
  models: {
    Tests
  }
};
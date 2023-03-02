var db = require('../db/index.js');

module.exports = {
  getAll: function (callback) {
    const queryString = 'SELECT * FROM messages';
    const queryArgs = [];
    db.dbConnection.query(queryString, queryArgs, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  }, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};

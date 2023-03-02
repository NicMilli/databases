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

  // INSERT INTO pet
  //      VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);

  create: function (reqBody, callback) {
    //console.log('models ========>', reqBody);
    var createdAt = new Date().toJSON().slice(0, 10);
    reqBody.id = null;
    reqBody.createdAt = createdAt;
    const queryString = 'INSERT INTO messages SET ?';
    const queryArgs = reqBody;
    db.dbConnection.query(queryString, queryArgs, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  } // a function which can be used to insert a message into the database
};

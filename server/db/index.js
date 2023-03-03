var mysql = require('mysql2');

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  room: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

module.exports.Message = Message;
module.exports.User = User;
// module.exports.dbConnection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat',
// });

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'
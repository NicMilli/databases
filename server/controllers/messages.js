/* eslint-disable indent */
var Promise = require('bluebird');
var models = Promise.promisifyAll(require('../models/messages'));
var { Message, User } = require('../db/index');

module.exports = {
  get: function (req, res) {
    Messages.findAll({ include: [User] })
      .complete( (err, data) => {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
      });
  }, // a function which handles a get request for all messages

  post: function (req, res) {
    User.findOrCreate({username: req.body[username]})
      .complete( (err, user) => {
        var params = {
          text: req.body[text],
          userid: user.id,
          room: req.body[room]
        };
        Message.create(params)
          .complete(function(err, results) {
            res.sendStatus(201);//WOOHOO TYPE SPEED!!
          });
      });
  } // a function which handles posting a message to the database
};

/*
module.exports = {
  get: function (req, res) {
    models.getAllAsync()
      .then( (data) => {
      res.status(200);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
      }
      );
      //ToDo add error handling
  }, // a function which handles a get request for all messages

  post: function (req, res) {
    //console.log('REQ BODY ---->', req);
    models.createAsync(req.body)
      .then( (data) => {
        res.status(201);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
      });
    //console.log('Models here ----->', req);
  } // a function which handles posting a message to the database
};
*/
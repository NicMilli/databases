/* eslint-disable indent */
var Promise = require('bluebird');
var models = Promise.promisifyAll(require('../models/messages'));

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

var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);
////Behind the scenes: callback = controller.messages.post
//exports.collectData = function(request, callback) {
//   var data = '';
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on('end', function() {
//     callback(JSON.parse(data));
//   });
// };

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;


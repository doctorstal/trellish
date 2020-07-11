var express = require('express');
var router = express.Router();

let users = [];

router.post('/authenticate', function(req, res, next) {
  let user = req.body;
  let authenticatedUser = users.find(u => {
    return u.username == user.username && u.password == user.password;
  });
  res.send(authenticatedUser);
});

router.post('/register', function(req, res, next) {
  var user = req.body;
  users.push(user);
  res.send('ok');
});

router.get('/', function(req, res, next) {
  res.send(users.map(u => u.username));
});

module.exports = router;

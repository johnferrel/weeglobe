var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/read', function(req, res, next) {
    res.render('read', { title: 'Let\'s get to readin\'' })
});

module.exports = router;

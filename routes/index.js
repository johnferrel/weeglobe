var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/classroom', function(req, res, next) {
    res.render('classroom', { title: 'Classsroom' })
});

router.get('/reading', function(req, res, next) {
  res.render('reading', { title: 'Let\'s get to readin\'' })
});

router.get('/activities', function(req, res, next) {
  res.render('activities', { title: 'Activities' })
});

router.get('/games', function(req, res, next) {
  res.render('games', { title: 'Games' })
});

module.exports = router;

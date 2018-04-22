var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Express' });
});

router.get('/dashboard-profile', function(req, res, next) {
  res.render('dashboard2', { title: 'Express' });
});

router.get('/consultant-profile', function(req, res, next) {
  res.render('consultant', { title: 'Express' });
});

router.get('/propsal', function(req, res, next) {
  res.render('proposal', { title: 'Express' });
});

router.get('/report', function(req, res, next) {
  res.render('report', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  res.render('paymentPage', { title: 'Express' });
});



module.exports = router;

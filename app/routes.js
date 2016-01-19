var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/', function (req, res) {
  res.render('index');
});

router.post('/beta/worldpay1', function (req, res) {
  var nino = req.body.ninumber;
  var amt = req.body.amountnumber;
  res.render('beta/worldpay1');
});

router.post('/beta/success', function (req, res) {
  res.render('beta/success');
});

router.post('/beta2/success', function (req, res) {
  res.render('beta2/success');
});

router.post('/beta3/success', function (req, res) {
  res.render('beta3/success');
});

router.post('/beta4/success', function (req, res) {
  res.render('beta4/success');
});

router.post('/beta5/success', function (req, res) {
  res.render('beta5/success');
});

router.post('/beta/d/declined', function (req, res) {
  res.render('beta/d/declined');
});

router.post('/beta/u/rejected', function (req, res) {
  res.render('beta/u/rejected');
});

router.post('/beta2/d/declined', function (req, res) {
  res.render('beta2/d/declined');
});

router.post('/beta2/u/rejected', function (req, res) {
  res.render('beta2/u/rejected');
});

router.post('/beta3/d/declined', function (req, res) {
  res.render('beta3/d/declined');
});

router.post('/beta3/u/rejected', function (req, res) {
  res.render('beta3/u/rejected');
});

router.post('/beta4/d/declined', function (req, res) {
  res.render('beta4/d/declined');
});

router.post('/beta4/u/rejected', function (req, res) {
  res.render('beta4/u/rejected');
});

router.post('/beta5/d/declined', function (req, res) {
  res.render('beta5/d/declined');
});

router.post('/beta5/u/rejected', function (req, res) {
  res.render('beta5/u/rejected');
});

// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

module.exports = router;

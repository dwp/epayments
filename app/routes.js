module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('beta2/index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here

    app.post('/beta/worldpay1', function (req, res) {
      var nino = req.body.ninumber;
      var amt = req.body.amountnumber;
      res.render('beta/worldpay1');
    });

    app.post('/beta/success', function (req, res) {
      res.render('beta/success');
    });

    app.post('/beta2/success', function (req, res) {
      res.render('beta2/success');
    });

    app.get('/beta/d', function (req, res) {
      res.redirect('beta/d/start');
    });

    app.get('/beta/u', function (req, res) {
      res.redirect('beta/u/start');
    });

    app.get('/beta2/d', function (req, res) {
      res.redirect('beta2/d/start');
    });

    app.get('/beta2/u', function (req, res) {
      res.redirect('beta2/u/start');
    });

    app.get('/beta3/d', function (req, res) {
      res.redirect('beta3/d/start');
    });

    app.get('/beta3/u', function (req, res) {
      res.redirect('beta3/u/start');
    });

    app.get('/beta/dec', function (req, res) {
      res.redirect('/beta2/start');
    });

    app.get('/beta2/', function (req, res) {
      res.redirect('beta2/index');
    });

    app.get('/beta3/', function (req, res) {
      res.redirect('beta3/index');
    });

    app.post('/beta/d/declined', function (req, res) {
      res.render('beta/d/declined');
    });

    app.post('/beta/u/rejected', function (req, res) {
      res.render('beta/u/rejected');
    });

    app.post('/beta2/d/declined', function (req, res) {
      res.render('beta2/d/declined');
    });

    app.post('/beta2/u/rejected', function (req, res) {
      res.render('beta2/u/rejected');
    });

    app.post('/beta3/d/declined', function (req, res) {
      res.render('beta3/d/declined');
    });

    app.post('/beta3/u/rejected', function (req, res) {
      res.render('beta3/u/rejected');
    });
  }
};

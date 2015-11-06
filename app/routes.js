module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
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

    app.post('/beta3/success', function (req, res) {
      res.render('beta3/success');
    });

    app.post('/beta4/success', function (req, res) {
      res.render('beta4/success');
    });

    app.post('/beta5/success', function (req, res) {
      res.render('beta5/success');
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

    app.get('/beta4/d', function (req, res) {
      res.redirect('beta4/d/start');
    });

    app.get('/beta4/u', function (req, res) {
      res.redirect('beta4/u/start');
    });

    app.get('/beta5/d', function (req, res) {
      res.redirect('beta5/d/start');
    });

    app.get('/beta5/u', function (req, res) {
      res.redirect('beta5/u/start');
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

    app.get('/beta4/', function (req, res) {
      res.redirect('beta4/index');
    });

    app.get('/beta5/', function (req, res) {
      res.redirect('beta5/index');
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

    app.post('/beta4/d/declined', function (req, res) {
      res.render('beta4/d/declined');
    });

    app.post('/beta4/u/rejected', function (req, res) {
      res.render('beta4/u/rejected');
    });

    app.post('/beta5/d/declined', function (req, res) {
      res.render('beta5/d/declined');
    });

    app.post('/beta5/u/rejected', function (req, res) {
      res.render('beta5/u/rejected');
    });
  }
};

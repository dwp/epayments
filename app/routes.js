module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('beta/index');
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

    app.get('/beta/d', function (req, res) {
      res.redirect('beta/d/start');
    });

    app.get('/beta/u', function (req, res) {
      res.redirect('beta/u/start');
    });

    app.get('/beta/dec', function (req, res) {
      res.redirect('beta/dec/start');
    });

    app.post('/beta/d/declined', function (req, res) {
      res.render('beta/d/declined');
    });

    app.post('/beta/u/rejected', function (req, res) {
      res.render('beta/u/rejected');
    });
  }
};

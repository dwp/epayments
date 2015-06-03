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

  }
};

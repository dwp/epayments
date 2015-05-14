module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('beta/index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here

  }
};

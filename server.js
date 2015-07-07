var express = require('express');

app = express(),
port = (process.env.PORT || 3000);

// Grab environment variables specified in Procfile or as Heroku config vars
    username = process.env.USERNAME,
    password = process.env.PASSWORD,
    env = process.env.NODE_ENV || 'local_development';

// Authenticate against the environment-provided credentials, if running
// the app in production (Heroku, effectively)
if (env === 'development') {
  if (!username || !password) {
    console.log('Username or password is not set, exiting.');
    process.exit(1);
  }
  app.use(express.basicAuth(username, password));
}

// Middleware to serve static assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/govuk_modules/govuk_template/assets'));
app.use('/public', express.static(__dirname + '/govuk_modules/govuk_frontend_toolkit'));
app.use('/public', express.static(__dirname + '/wp_assets'));
app.use(express.static(__dirname + '/dist'));

app.engine('html', require(__dirname + '/lib/template-engine.js').__express);
app.set('view engine', 'html');

// Index page
app.get('/', function(req, res){
  res.sendfile(__dirname + '/app/dist/index.html');
});

// Declaration page
app.get('/declaration.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/declaration.html');
});

// Step 1 page
app.get('/step1.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/step1.html');
});

// Success page
app.get('/success.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/success.html');
});

// Declined page
app.get('/declined.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/declined.html');
});

// Rejected page
app.get('/rejected.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/rejected.html');
});

// Invalid reference number page
app.get('/invalid.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/invalid.html');
});

// Exit survey page
app.get('/exit_survey.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/exit_survey.html');
});

// Thank you page
app.get('/all_thank_you.html', function(req, res){
  res.sendfile(__dirname + '/app/dist/all_thank_you.html');
});

// auto render any view that exists

app.get(/^\/([^.]+)$/, function (req, res) {

	var path = (req.params[0]);

	res.render(path, function(err, html) {
		if (err) {
			console.log(err);
			res.send(404);
		} else {
			res.end(html);
		}
	});

});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});

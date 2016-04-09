var express = require('express'),
    app = express(),
    resumeData = require('./resumedata.json');

// set the view engine to ejs
app.set('view engine', 'ejs');

// public folder to store static assets
app.use(express.static(__dirname + '/public'));

// route
app.get('/', function(req, res) {
  res.render('resume-template', resumeData);
});

// listen on 8000 or the defined env port
var port = process.env.PORT || 8000;
app.listen(port);

console.log('Server is started. Load up http://localhost:' + port);

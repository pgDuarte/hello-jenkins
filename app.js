

var express = require('express'); //import the express lib we specified in our package.json.
 
var app = express(); 
 
app.get('/', function (req, res) {
  res.send('hello world');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
 
var express = require('express')
var app = express()
 
const isLoggedIn = require("./middleware.js");
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}


 
app.get('/usuario/:id', function (req, res) {
    
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})



app.get("/users/:id", isLoggedIn, function(req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
});

app.listen(3000)
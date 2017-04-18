var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index.pug');
})
/*
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
})*/

app.post('/filesize', upload.single('profile'), function(req, res, next) {
    console.log(req.file);
    res.send(JSON.stringify({size: req.file.size}));
   console.log("A request for filesize was made.") 
});

app.listen(app.get('port'), function() {
    console.log("listening on port: " + app.get('port'));
});
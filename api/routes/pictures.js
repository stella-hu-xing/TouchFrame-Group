var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/download/:name', function(req, res, next) {
  var file = __dirname + "/../pictures/" + req.params.name;
  // console.log(file);
  // console.log(Object.keys(res));
  fs.readFile(file, function(err, data) {
   console.log('hi');
   if (err) {
     res.json("Doesn't exist");
   } else {
     res.send(data);
   }
  });
});

router.post('/generate', function(req, res, next) {
  var file_path = __dirname + "/../pictures/" + (new Date).getTime() + ".png";
});

module.exports = router;

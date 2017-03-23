var express = require('express');
var router = express.Router();

/* GET test . */
router.get('/', function(req, res, next) {
  req.db.collection('test').find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    res.send(JSON.stringify(docs));
  });
});

module.exports = router;


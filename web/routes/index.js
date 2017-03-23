var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'TouchFrame' });
});

/* GET home page. */
router.get('/dashboard', function(req,res){
  res.render('dashboard', { title: 'dashboard'});
});

/* GET user management page. */
router.get('/management', function(req,res){
  res.render('management', { title: 'Carer Management'});
});

module.exports = router;

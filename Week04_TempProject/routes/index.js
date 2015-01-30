var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Prog272' });

});

router.get('/foo', function(req, res) {
  res.send({"result": "success"});

});

router.get('/Bar', function(req, res) {
  res.send({"result": "success"});

});
module.exports = router;

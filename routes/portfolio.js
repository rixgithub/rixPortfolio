var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

module.exports = router;

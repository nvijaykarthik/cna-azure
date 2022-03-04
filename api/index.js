var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({hello:"Welcome"})
});

module.exports = router;

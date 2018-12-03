var express = require('express');
var router = express.Router();

var db = require('../models/index'); // cliでinitした時に作成されるmodels配下のindex.js


/* findAll */
router.get('/findall', function(req, res, next) {
  db.typings.findAll({}).then((result) => {
    res.json(result);
  });
});

/* find */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  db.typings.find(
    { "where": { "id": id } }
  ).then((result) => { 
    res.json(result)
  });
});

module.exports = router;

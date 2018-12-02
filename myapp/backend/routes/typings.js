var express = require('express');
var router = express.Router();

var db = require('../models/index'); // cliでinitした時に作成されるmodels配下のindex.js

router.get('/', function(req, res, next) {
  db.typings.findAll({}).then((result) => {
    res.json(result);
  });

});

module.exports = router;

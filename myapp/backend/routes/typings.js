var express = require('express');
var router = express.Router();

var db = require('../models/');

/* ID全取得 */
router.get('/Ids', function(req, res, next) {
  db.typings.findAll({attributes:['id']}).then((result) => {
    res.json(result);
  });
});

/* find by id */
router.get('/', function(req, res, next) {
  var id = req.query.id;
  db.typings.find(
    { "where": { "id": id } }
  ).then((result) => { 
    res.json(result)
  });
});

/* お題投稿 */
router.post('/new', function(req, res, next) {
  // console.log(req.body);
  db.typings.create({
    title: req.body.title,
    premise: req.body.premise,
    answer: req.body.answer,
    output: req.body.output,
    description: req.body.description,
    author: req.body.author,
    language: req.body.language,
    version: req.body.version,
    rank: req.body.rank
  }).then((result) => {
    res.json(result)
  });
});


module.exports = router;

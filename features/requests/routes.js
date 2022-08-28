var express = require('express');
var router = express.Router();
const { post } = require('./handler');

/* GET home page. */
router.get('/new', function (req, res, next) {
  let data = {
    message: 'Hello world!',
    layout: 'layout.njk',
    title: 'Request an Interprter'
  };
  res.render('requests/new', data);
});

router.post('/v1/requests/new', post);
module.exports = router;

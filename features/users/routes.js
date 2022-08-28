var express = require('express');
var router = express.Router();

/* GET users listing. */
const login = router.get('/', (req, res, next) => {
  let data = {
    message: 'Login',
    layout: 'unauth.njk',
    title: 'Login'
  };
  res.render('auth/login', data);
});

module.exports = { login };

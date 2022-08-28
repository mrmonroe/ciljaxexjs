require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const userRoutes = require('./features/users/routes');
const authRoutes = require('./features/auth/routes');
const requestRoutes = require('./features/requests/routes');
const verifyToken = require('./middleware/authJWT');

var app = express();

app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');
app.use(express.static(path.join(__dirname, 'public')));
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: process.env.NODE_ENV !== 'production'
});

// express configuratin'
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.SECURECOOKIE));

// route configuratin
app.use('/', require('./features/home/routes'));
app.use('/admin/requests', require('./features/requests/routes')); // not sure if i need to go any further here
app.use('/admin/users/login', userRoutes.login); // not sure if i need to go any further here

app.use('/api', authRoutes);
app.use('/api', requestRoutes);

// middleware configuratin'

app.use(function (req, res, next) {
  // catch 404 and forward to error handler
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

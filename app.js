require('dotenv').config()
var createError = require( 'http-errors' );
var express = require('express');
var path = require('path');
var cookieParser = require( 'cookie-parser' );
var logger = require( 'morgan' );
var nunjucks = require( 'nunjucks' );
const { sequelize } = require( './db' )

var app = express();
nunjucks.configure('views', {
  autoescape:  true,
  express: app,
  noCache: process.env.NODE_ENV === 'production'
} )
  
app.locals.db = sequelize

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'njk');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( cookieParser( process.env.SECURECOOKIE ) );
app.use(express.static(path.join(__dirname, 'public')));
app.use( '/', require( './features/home/routes' ) );
app.use( '/users', require( './features/users/routes' ) );
app.use('/requests', require('./features/requests/routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

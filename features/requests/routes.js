var express = require( 'express' );
var router = express.Router();

/* GET home page. */
router.get( '/new',function( req,res,next ) {
    
    let  data = {
        message: 'Hello world!',
        layout:  '../../views/includes/layout.njk',
        title: 'Nunjucks example'
      }
  res.render('requests/new', data);
});

module.exports = router;

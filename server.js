//Grab the packages/ variables we need
//=========================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//Configure the App
//=========================================
//tell node where to look for site resources

app.use(express.static(__dirname + ' /public'));

//set the view engine to ejs
app.set('view engine', 'ejs');

//configure instagram app whit client-id
ig.use({
  client_id: '55165a008cf04e0ca0931d1d72e483df',
  client_secret: '580dbfeb5b044d85a02eb8616068b231'
});

//set the routes
//=========================================
//homepage route - popular images

app.get('/', function(req,res){
  //use the instagram package to get popular media
  ig.media_popular(function(err,medias,remaining,limit){
    //render the homepage and pass in the popular images
    res.render('pages/index', {grams:medias});
  });
});

//start the server
//=========================================
app.listen(8080);
console.log('App Started! Look at http://localhost:8080');

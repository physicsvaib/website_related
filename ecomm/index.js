
var bodyparser = require('body-parser')
var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./models/user');
var app = express();
var ejs = require('ejs');
var ejsmate = require('ejs-mate');

mongoose.connect('mongodb://root:abc123@ds161710.mlab.com:61710/eco-mmerce',
function(err){
    if (err){
        console.log(err);
        
    }else{
        console.log("Conneted");
        
    }
});

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.engine('ejs',ejsmate);
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render('home');
})
app.get('/about',function(req,res){
    res.render('about');
})
app.post('/create-user',function(req,res){
    var user = new User();

    user.profile.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    

    user.save(function(err){
        if(err) return console.log(err);
        res.json('Successful');
    });

})

app.listen(3000,function(err){
    if(err) throw err;
    console.log("Server is Running");
    
});
``
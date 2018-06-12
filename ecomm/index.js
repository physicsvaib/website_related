

var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('dev'));

app.get('/names',function(req,res){
    res.json("hey this might Work");
});
app.get("/",function(req,res){
    res.json("Hey Again");
});
app.listen(3000,function(err){
    if(err) throw err;
    console.log("Server is Running");
    
});

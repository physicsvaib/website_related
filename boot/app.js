express = require("express");
morgan = require("morgan");
app = express();
app.use(morgan('dev'))

var sounds = {
    cow: "Moo",
    cat: "Meow",
    dog: "Woah Woah"
};
//this is where it all starts

app.get('/bye', (req, res) => {
    res.send("GoodBye");
});
app.get('/dogs', (req, res) => {
    res.send("MOEW!!");
});
app.get('/sound/:animal', (req, res) => {
    var animal = req.params.animal.toLowerCase();

  
    var sound = sounds[animal];
    res.send("this is " + animal +  " and it says '" + sound + "'");
});



//Repeat Logic

app.get('/repeat/:mess/:times', (req, res) => {
    var mess = req.params.mess;
    var times = Number(req.params.times);    
    var reply = "";

    for(var i = 0 ; i < times ; i++ ){
        reply += mess + "\t";

    }
    res.send(reply);
});

app.get('*', (req, res) => {
    res.send("what the f");
});
//Listen Function
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
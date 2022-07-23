var express = require("express");
var app = express();
var path = require("path")
var http = require("http");
var fs = require("fs");
// var cartData = require("./data/cartData");



// var PORT = 3030;
const port = process.env.PORT || 5000


//app.use(express.static('public')); // this wont work
app.use(express.static('src'));

app.use('/src', express.static(__dirname + '/src'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile("index.html")
})



app.listen(port, function () {
    console.log("Server listening on PORT: " + port)
});
var express = require('express');
express()
    .get('/', function (req, res) { return res.send('Frane'); })
    .listen(3000, function () { return console.log('Server is running get'); });
express().post("*", function (req, res) {
    console.log("POST", req.body);
    res.send("POST");
}).listen(4000, function () { return console.log("Server is running post"); });

/* jshint node: true */
//SAMO testira aplikacijo
"use strict";
// content of index.js
var http = require('http');
var fs = require('fs');
var port = 3000;

var requestHandler = function (request, response) {
    console.log(request.url);
    switch (request.url) {
        case "/funkcionalnosti/":
            fs.readFile('./views/funkcionalnosti.html', function (err, html) {
                if (err) {
                    throw err;
                }
                response.writeHeader(200, { "Content-Type": "text/html" });
                response.write(html);
                response.end();
            });
            break;
        case "/posebnosti/":
            fs.readFile('./views/posebnosti.html', function (err, html) {
                if (err) {
                    throw err;
                }
                response.writeHeader(200, { "Content-Type": "text/html" });
                response.write(html);
                response.end();
            });
            break;
        default:
            fs.readFile('./views/pagenotfound.html', function (err, html) {
                if (err) {
                    throw err;
                }
                response.writeHeader(200, { "Content-Type": "text/html" });
                response.write(html);
                response.end();
            });
            break;
    }
};

var server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log("server is listening on " + port);
});

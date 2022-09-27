const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;


const server = http.createServer((req,res) =>{
    
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');

    res.end("Hello Danki!");

});


server.listen(port,hostname,() => {
    console.log("Servidor está rodando");
})
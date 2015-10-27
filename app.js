var http = require('http');

var randomNumber= require("./random.js");
var convertNumber= require("./convert_number");
var funFunction = require("./playground");

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write(randomNumber(100,1000000));
    //response.write(convertNumber(parseInt(randomNumber(100, 1000000))));
    response.write(funFunction.accountBalance());
    response.end();

}).listen(8000);


module.exports=http;
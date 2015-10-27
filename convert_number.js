/**
 * Created by Zeo on 10/27/15.
 */
var numeral = require('numeral');
var convertUsd= function(number){
 return  numeral(number).format('$0,0.00');
};


module.exports=convertUsd;
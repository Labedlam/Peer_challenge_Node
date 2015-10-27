/**
 * Created by Zeo on 10/27/15.
 */
var randomNum= require('./random');
var convertNum= require('./convert_number');

var funTime= function(){
    return convertNum(parseInt(randomNum(100, 1000000)));

};

var accountBalance= function(){
    return "your account balance is\n "+ funTime();

};

module.exports= funTime;
module.exports.accountBalance=accountBalance;
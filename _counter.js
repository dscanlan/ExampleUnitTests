'use strict';
var exports = module.exports;

var number = 0;
exports.setNumber = function(num){
	number = num;
	return number;
};

exports.setNumberCallBack = function(num, cb){
	number = num;
	cb(num);
};

exports.increment = function(){
	number++;
	return true;
};

exports.decrement = function(){
	number--;
	return false;
};




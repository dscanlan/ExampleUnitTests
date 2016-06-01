'use strict';
var chai = require('chai');
var expect = chai.expect;
var _counter = require('../_counter');

var number = 1;
var number2 = 2;

describe('Unit Tests for _counter', function(){
	describe('Test for Set', function(){
		it('should set the number to ' + number, function(done){
			var newNum = _counter.setNumber(number);
			expect(newNum).to.be.equal(number);
			done();
		});
	});
	describe('Test for Set with Callback', function(){
		it('should set the number to ' + number2, function(done){
			_counter.setNumberCallBack(number2, function(ret){
				expect(ret).to.be.equal(number2);
				done();
			});
		});
	});
	describe('Test for increment', function(){
		it('should increment the number and return true', function(done){
			var _ret = _counter.increment();
			expect(_ret).to.be.true;
			done();
		});
	});
	describe('Test for decrement', function(){
		it('should decrement the number and return false', function(done){
			var _ret = _counter.decrement();
			expect(_ret).to.be.false;
			done();
		});
	});
});
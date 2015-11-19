'use strict';

var expect = require('chai').expect;
var stringUtils = require('../../index.js');

describe('test methods', function() {	
	it('Have property uppercase', function() {
		expect(stringUtils)
			.to.be.have.property('uppercase')
			.to.be.an('function');
	});
	
	it('Have property lowercase', function() {
		expect(stringUtils)
			.to.be.have.property('lowercase')
			.to.be.an('function');
	});
});

describe('test return values of methods', function() {
	it('should return string in lowercase', function() {
		expect(stringUtils.lowercase('Caio Furlan'))
			.to.be.equal('caio furlan');

		expect(stringUtils.lowercase('LOREM !!!!!'))
			.to.be.equal('lorem !!!!!');
	});

	it('should return string in uppercase', function() {
		expect(stringUtils.uppercase('Caio Furlan'))
			.to.be.equal('CAIO FURLAN');

		expect(stringUtils.uppercase('lorem !!!!!'))
			.to.be.equal('LOREM !!!!!');
	});
});

describe('erros when not pass a string has argument', function() {
	it('errors argument string is requered', function() {
		expect(stringUtils.uppercase)
			.to.throw('arguments string is requeired');
	});
	it('errors argument string is requered', function() {
		expect(function() {stringUtils.uppercase([]);})
			.to.throw('arguments need be a string');
	});

	it('errors argument string is requered', function() {
		expect(stringUtils.lowercase)
			.to.throw('arguments string is requeired');
	});
	it('errors argument string is requered', function() {
		expect(function() {stringUtils.lowercase([]);})
			.to.throw('arguments need be a string');
	});
});
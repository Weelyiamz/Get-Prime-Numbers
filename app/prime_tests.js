'use strict'

const myApp = require("../getPrimes.js")


describe("Get prime tests",function(){

	it("should return [2,3] for 3",function(){
		expect(myApp.getPrimes(3)).toEqual([2,3]);
	});

	it("should return [2,3,5] for 6",function(){
		expect(myApp.getPrimes(6)).toEqual([2,3,5]);
	});

	it("should return [2,3,5,7] for 7",function(){
		expect(myApp.getPrimes(7)).toEqual([2,3,5,7])
	});
	it("should return [2,3,5,7,9] for 9",function(){
		expect(myApp.getPrimes(9)).toEqual([2,3,5,7])
	});	
	it("should return [2,3,5,7,9,11] for 11",function(){
		expect(myApp.getPrimes(11)).toEqual([2,3,5,7,11])
	});
	it("should return [2,3,5,7,9,11,13] for 13",function(){
		expect(myApp.getPrimes(13)).toEqual([2,3,5,7,11,13])
	});
	it("should return [2,3,5,7,9,11,13,15] for 15",function(){
		expect(myApp.getPrimes(15)).toEqual([2,3,5,7,11,13])
	});
	it("should return [2,3,5,7,9,11,13,15,17] for 17",function(){
		expect(myApp.getPrimes(17)).toEqual([2,3,5,7,11,13,17])
	});
	it("should return [2,3,5,7,9,11,13,15,17,19] for 19",function(){
		expect(myApp.getPrimes(19)).toEqual([2,3,5,7,11,13,17,19])
	});
	it("should return [2,3,5,7,9,11,13,15,17,19,21] for 21",function(){
		expect(myApp.getPrimes(21)).toEqual([2,3,5,7,11,13,17,19])
	});
	it("should return [2,3,5,7,9,11,13,15,17,19,21,23] for 23",function(){
		expect(myApp.getPrimes(23)).toEqual([2,3,5,7,11,13,17,19,23])
	});
	it("should return [2,3,5,7,9,11,13,15,17,19,21,23,25] for 25",function(){
		expect(myApp.getPrimes(25)).toEqual([2,3,5,7,11,13,17,19,23])
	});
	it("should return [2,3,5,7,9,11,13,17,19,21,23,25,27] for 27",function(){
		expect(myApp.getPrimes(27)).toEqual([2,3,5,7,11,13,17,19,23])
	});
});
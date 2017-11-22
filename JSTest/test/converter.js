var expect = require("chai").expect;
var converter = require("../app/converter");
describe("Roman to Integer Converter",function(){
	it("converts to numeric",function(){
		var number1 = converter.romanToInteger("XX");
		var number2 = converter.romanToInteger("LXXXVII");
		var number3 = converter.romanToInteger("XLIII");
		var number4 = converter.romanToInteger("XXII");
		var number5 = converter.romanToInteger("DCCVII");
		var number6 = converter.romanToInteger("LXIX");
		var number7 = converter.romanToInteger("IIII");
		var number8 = converter.romanToInteger("XXXX");
		var number9 = converter.romanToInteger("VXI");

		expect(number1).to.equal(20);
		expect(number2).to.equal(87);
		expect(number3).to.equal(43);
		expect(number4).to.equal(22);
		expect(number5).to.equal(707);
		expect(number6).to.equal(69);
		expect(number7).to.equal("ERROR");
		expect(number8).to.equal("ERROR");
		expect(number9).to.equal("ERROR");
	});
});
function sum(a, b) {
	return a + b > 10;
}


let array = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = array[1][1];


var each = function(startArr, f){return f(startArr)};
var arr = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

let assert = require('chai').assert

describe("Sum", function() {
	it("Является ли a + b больше 10 ?", function(){
		assert.equal(sum(2,2), true);
	});
});

describe("Array", function() {
	it("Является ли переменная num 5 ?", function(){
		assert.equal(num, 5);
	});
});

describe("Each", function() {
	it("Соответствует ли функция each нашим условиям ?", function(){
		assert.typeOf(each(arr, myFunc), "array");
		assert.equal(each(arr, myFunc), [8, 7, 6, 5, 4]);
		assert.lengthOf(each(arr, myFunc), 5);
	});
});
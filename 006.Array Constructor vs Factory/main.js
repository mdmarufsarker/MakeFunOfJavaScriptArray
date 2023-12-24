// constructor pattern
// It means that the Array constructor is called with the new operator.
var arr1 = new Array(1, 2, 3);
console.log(arr1); // [1, 2, 3]

var arr2 = new Array(5);
console.log(arr2, arr2.length); // [ <5 empty items> ] 5

var arr3 = new Array(1, 2, 3, 4, 5);
console.log(arr3, arr2.length); // [ 1, 2, 3, 4, 5 ] 5

// factory pattern
// It means that the Array constructor is called without the new operator.
var arr4 = Array(1, 2, 3);
console.log(arr4); // [1, 2, 3]

var arr5 = Array(5);
console.log(arr5, arr5.length); // [ <5 empty items> ] 5

var arr6 = Array(1, 2, 3, 4, 5);
console.log(arr6, arr6.length); // [ 1, 2, 3, 4, 5 ] 5
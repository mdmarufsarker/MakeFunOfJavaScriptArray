// custom every function
const every = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = every(arr1, function (value) {
  return value % 2 === 0;
});
console.log(result); // false

const arr2 = [2, 4, 6, 8, 10];
const result2 = every(arr2, function (value) {
  return value % 2 === 0;
});
console.log(result2); // true
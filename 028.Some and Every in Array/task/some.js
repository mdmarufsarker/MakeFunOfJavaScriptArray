// custom some function
const some = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = some(arr1, function (value) {
  return value % 2 === 0;
});

console.log(result); // true
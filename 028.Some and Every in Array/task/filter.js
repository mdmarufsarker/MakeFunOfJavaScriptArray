// custom filter function
const filter = function (array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = filter(arr, function (value) {
  return value % 2 === 0;
});
console.log(result); // [ 2, 4, 6, 8 ]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Method 1: Using concat()
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// Method 2: Using spread operator
const arr4 = [...arr1, ...arr2];
console.log(arr4); // [1, 2, 3, 4, 5, 6]
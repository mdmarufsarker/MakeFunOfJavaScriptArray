const arr = [1, 2, 3, 4, 5];

// add items at the end of the array
arr[arr.length] = 6;
arr.push(7);

console.log(arr); // [1, 2, 3, 4, 5, 6, 7]

// new style using spread operator
const tmp = [11, 22, 33, 44, 55];
arr.push(...tmp);

console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 11, 22, 33, 44, 55]

// old style using apply
Array.prototype.push.apply(arr, tmp);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 11, 22, 33, 44, 55, 11, 22, 33, 44, 55]


// add items at the beginning of the array
const mms = [-1, -2, -3, -4, -5];
mms.unshift(-6);
console.log(mms); // [-6, -1, -2, -3, -4, -5]

const tmp2 = [-11, -22, -33, -44, -55];
mms.unshift(...tmp2);
console.log(mms); // [-11, -22, -33, -44, -55, -6, -1, -2, -3, -4, -5]

// old style using apply
Array.prototype.unshift.apply(mms, tmp2);
console.log(mms); // [-11, -22, -33, -44, -55, -6, -1, -2, -3, -4, -5, -11, -22, -33, -44, -55]


// use splice to insert items at a specific index
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 6);
console.log(arr2); // [1, 2, 3, 6, 4, 5]
arr2.splice(3, 0, 7, 8, 9);
console.log(arr2); // [1, 2, 3, 7, 8, 9, 6, 4, 5]

const tmp3 = [11, 22, 33, 44, 55];
arr2.splice(3, 0, ...tmp3); // [1, 2, 3, 11, 22, 33, 44, 55, 7, 8, 9, 6, 4, 5]
console.log(arr2);
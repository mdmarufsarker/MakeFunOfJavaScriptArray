let names = [
  "Stack Learner",
  "Stack School",
  "Stack Consultancy",
  "Stack Solution",
];

// How we do it on for loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// Stack Learner
// Stack School
// Stack Consultancy
// Stack Solution
for (let i = 0; i < names.length; i++) {
  console.log(`${i + 1} : ${names[i]}`);
}
// 1 : Stack Learner
// 2 : Stack School
// 3 : Stack Consultancy
// 4 : Stack Solution

// Iterating Logic --> Business Logic
function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}
function logic(value, index, arr) {
  console.log(value, index, arr);
}

function log(value) {
  console.log(value);
}

reuse([1, 2, 3, 4, 5], log);
reuse(["One", "Two", "Three", "Four", "Five"], logic);
// 1
// 2
// 3
// 4
// 5
// One 0 [ 'One', 'Two', 'Three', 'Four', 'Five' ]
// Two 1 [ 'One', 'Two', 'Three', 'Four', 'Five' ]
// Three 2 [ 'One', 'Two', 'Three', 'Four', 'Five' ]
// Four 3 [ 'One', 'Two', 'Three', 'Four', 'Five' ]
// Five 4 [ 'One', 'Two', 'Three', 'Four', 'Five' ]

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const nums = [1, 2, 3, 4, 5];
let sum = 0;
// function sumOfArray(value) {
//   sum += value;
// }
// myForEach(nums, sumOfArray);

myForEach(nums, function (value, index, arr) {
  sum += value;
});
console.log(sum); // 15



names.forEach(function (value, index, arr) {
    console.log(value, index);
})
// Stack Learner 0
// Stack School 1
// Stack Consultancy 2
// Stack Solution 3
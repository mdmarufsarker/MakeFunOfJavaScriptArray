let names = [
  "Stack Learner",
  "Stack School",
  "Stack Consultancy",
  "Stack Solution",
];

// Extract Length --> [13, 12, 17, 14, 10]
// Get Uppercase version --> ["STACK LEARNER", "STACK SCHOOL", "STACK CONSULTANCY", "STACK SOLUTION"]
// Get Sliced Version --> ["Learner", "School", "Consultancy", "Solution"]

// we have reuse function
function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

// Example One
const res1 = [];
reuse(names, function (value) {
  res1.push(value.length);
});

// Example Two
const res2 = [];
reuse(names, function (value) {
  res2.push(value.toUpperCase());
});

// Example Three
const res3 = [];
reuse(names, function (value) {
  res3.push(value.slice(6));
});

console.log(res1); // [ 13, 12, 17, 14 ]
console.log(res2); // [ 'STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION' ]
console.log(res3); // [ 'Learner', 'School', 'Consultancy', 'Solution' ]

function reuseAndMap(arr, logic) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(logic(arr[i], i, arr));
  }
  return res;
}

// Example One
const res4 = reuseAndMap(names, function (value) {
  return value.length;
});

// Example Two
const res5 = reuseAndMap(names, function (value) {
  return value.toUpperCase();
});

// Example Three
const res6 = reuseAndMap(names, function (value) {
  return value.slice(6);
});

console.log(res4); // [ 13, 12, 17, 14 ]
console.log(res5); // [ 'STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION' ]
console.log(res6); // [ 'Learner', 'School', 'Consultancy', 'Solution' ]


const length1 = names.map((value) => value.length);
const upper1 = names.map((value) => value.toUpperCase());
const slice1 = names.map((value) => value.slice(6));

console.log(length1); // [ 13, 12, 17, 14 ]
console.log(upper1); // [ 'STACK LEARNER', 'STACK SCHOOL', 'STACK CONSULTANCY', 'STACK SOLUTION' ]
console.log(slice1); // [ 'Learner', 'School', 'Consultancy', 'Solution' ]
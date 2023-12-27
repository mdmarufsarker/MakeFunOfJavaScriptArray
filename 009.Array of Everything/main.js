const arrr = [
  1,
  "Nayem",
  true,
  { name: "Nayem" },
  [1, 2, 3],
  false,
  null,
  undefined,
  NaN,
];

console.log(arrr);
// [
//     1,
//     'Nayem',
//     true,
//     { name: 'Nayem' },
//     [ 1, 2, 3 ],
//     false,
//     null,
//     undefined,
//     NaN
// ]

// Array of Objects
const favoriteChannels = [
  {
    name: "Stack Learner",
    url: "https://youtube.com/stacklearner",
  },
  {
    name: "Traversy Media",
    url: "https://youtube.com/traversymedia",
  },
  {
    name: "Web Dev Simplified",
    url: "https://youtube.com/webdevsimplified",
  },
];

console.log(favoriteChannels);
// [
//     { name: 'Stack Learner', url: 'https://youtube.com/stacklearner' },
//     { name: 'Traversy Media', url: 'https://youtube.com/traversymedia' },
//     {
//       name: 'Web Dev Simplified',
//       url: 'https://youtube.com/webdevsimplified'
//     }
// ]

// Array of Functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const prod = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, prod, div, mod];
const n1 = 10,
  n2 = 5;

funcs.forEach((func) => {
  console.log(`${n1} ${func.name} ${n2} = ${func(n1, n2)}`);
});
// 10 sum 5 = 15
// 10 sub 5 = 5
// 10 prod 5 = 50
// 10 div 5 = 2
// 10 mod 5 = 0

// Array of Arrays
const pointTable = [
  [0, 0],
  [3, 5],
  [5, 5],
  [10, 5],
  [10, 10],
  [0, 10],
];

// 1D Array
for (let i = 0; i < pointTable.length; i++) {
  console.log(`Point ${i} - x = ${pointTable[i][0]}, y = ${pointTable[i][1]}`);
}

// Point 0 - x = 0, y = 0
// Point 1 - x = 3, y = 5
// Point 2 - x = 5, y = 5
// Point 3 - x = 10, y = 5
// Point 4 - x = 10, y = 10
// Point 5 - x = 0, y = 10

// 2D Array
for (let i = 0; i < pointTable.length; i++) {
  for (let j = 0; j < pointTable[i].length; j++) {
    console.log(
      `Point ${i} - x = ${pointTable[i][j]}, y = ${pointTable[i][j]}`
    );
  }
}

// Point 0 - x = 0, y = 0
// Point 0 - x = 0, y = 0
// Point 1 - x = 3, y = 3
// Point 1 - x = 5, y = 5
// Point 2 - x = 5, y = 5
// Point 2 - x = 5, y = 5
// Point 3 - x = 10, y = 10
// Point 3 - x = 5, y = 5
// Point 4 - x = 10, y = 10
// Point 4 - x = 10, y = 10
// Point 5 - x = 0, y = 0
// Point 5 - x = 10, y = 10

// 2D Array
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numbers[0][0]); // 1
console.log(numbers[0][1]); // 2
console.log(numbers[0][2]); // 3
console.log(numbers[1][0]); // 4
console.log(numbers[1][1]); // 5
console.log(numbers[1][2]); // 6
console.log(numbers[2][0]); // 7
console.log(numbers[2][1]); // 8
console.log(numbers[2][2]); // 9

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]); // 1 2 3 4 5 6 7 8 9
  }
}

// Matrix Example
const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const MatrixSum = (matA, matB) => {
    const result = [];
    for(let i = 0; i < matA.length; i++) {
        const row = [];
        for(let j = 0; j < matA[i].length; j++) {
            row.push(matA[i][j] + matB[i][j]);
        }
        result.push(row);
    }

    return result;
}

const ans = MatrixSum(A, B);
console.log(ans);
// [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]

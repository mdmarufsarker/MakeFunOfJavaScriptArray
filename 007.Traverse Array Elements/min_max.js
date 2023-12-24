// Find the maximum and minimum value in an array
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(randomNumber(1, 100));
}

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}

console.log(arr);
console.log(max, min); // 99 1

// Find 2nd maximum and 2nd minimum value in an array
let max2 = arr[0];
let min2 = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max2 && arr[i] < max) max2 = arr[i];
    if (arr[i] < min2 && arr[i] > min) min2 = arr[i];
}

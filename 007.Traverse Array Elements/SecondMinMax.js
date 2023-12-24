function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(randomNumber(1, 100));
}

let secondMax = arr[0];
let secondMin = arr[0];
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    }
    if (arr[i] < min) {
        secondMin = min;
        min = arr[i];
    }
}

console.log(arr);
console.log(max, min); // 99 1
console.log(secondMax, secondMin); // 98 2
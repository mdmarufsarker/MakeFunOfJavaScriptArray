let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let sum = 0;
for(let i in arr) {
    sum += arr[i];
}

console.log(sum); // 15

avg = sum / arr.length;
console.log(avg); // 3
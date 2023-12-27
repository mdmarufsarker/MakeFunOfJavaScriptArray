// Fill an array with for loop
const arr1 = new Array(10)

for(let i = 0; i < arr1.length; i++) {
    arr1[i] = false
}

console.log(arr1) // [ false, false, false, false, false, false, false, false, false, false ]

// Fill an array with fill method
const arr2 = new Array(10).fill(0)

console.log(arr2) // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

const names = ["Nayem", "Shegufa", "Salvy"]
names[0] = "HM Nayem"
names[1] = "Shegufa Taranjum"
names[2] = "Shayaike Salvy"

console.log(names) // [ 'HM Nayem', 'Shegufa Taranjum', 'Shayaike Salvy' ]
function update(arr){
    for(let i = 0; i < arr.length; i++) {
        arr[i] = `${i + 1}. ${arr[i]}`
    }
    return arr
}

console.log(update(names)) // [ '1. HM Nayem', '2. Shegufa Taranjum', '3. Shayaike Salvy' ]
console.log(names) // [ '1. HM Nayem', '2. Shegufa Taranjum', '3. Shayaike Salvy' ]
console.log(names === update(names)) // true
// Array is mutable. It means if we change the array, it will change the original array.

const response = new Array(9)
response.fill(false)
for(let i = 0; i < response.length; i++) {
    const rand = Math.floor(Math.random() * 10) + 1
    response[i] = rand > 5 ? "X" : "O"
}

console.log(response) 
// [
//     'O', 'X', 'X',
//     'X', 'O', 'X',
//     'O', 'X', 'O'
// ]
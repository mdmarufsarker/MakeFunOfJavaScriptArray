// Delete Specific Elements in Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// remove first element
numbers.shift(); // [2, 3, 4, 5, 6, 7, 8, 9, 10]

// remove last element
numbers.pop(); // [2, 3, 4, 5, 6, 7, 8, 9]

// remove inside elements - splice(start, deleteCount, item1, item2, ...)
numbers.splice(2, 3); // [2, 3, 7, 8, 9]

// remove inside elements - splice using value
const tobeDeleted = 8;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === tobeDeleted) {
        numbers.splice(i, 1);
        break;
    }
}
// [2, 3, 7, 9]

// Filter Array
const toBeDeleted = 3;
numbers = numbers.filter(number => number !== toBeDeleted); // [2, 7, 9]


// Delete Operator
numbers[1] = undefined; // [2, undefined, 7, 9]
delete numbers[1]; // [ 2, <1 empty item>, 9 ]

// Reset Whole Array
let x = [1, 2, 3]
let y = x;
x = [];
console.log(x, y) // [], [1, 2, 3]


console.log(numbers);
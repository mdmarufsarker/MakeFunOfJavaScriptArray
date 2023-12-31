// Slide Array into Multiple Arrays

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// slice array into multiple arrays
const sliceArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(sliceArray(arr, 2)); // [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9]]

// Clone Array
const cloneArray = (arr) => {
    return arr.slice(0);
}

console.log(cloneArray(arr)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(cloneArray === arr); // false


// Array like objects to array
const arrayLikeObj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}

const arrayLikeObjToArray = (obj) => {
    return Array.prototype.slice.call(obj);
}

const ans = arrayLikeObjToArray(arrayLikeObj);
console.log(ans); // ['a', 'b', 'c']
console.log(ans instanceof Array); // true
console.log(ans.__proto__.constructor); // [Function: Array]
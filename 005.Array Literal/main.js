const arr = []
arr[0] = 1
arr[1] = 2
arr[2] = 3

console.log(arr) // [ 1, 2, 3 ]
console.log(arr.length) // 3

arr[99] = 100
console.log(arr) // [ 1, 2, 3, <96 empty items>, 100 ]
console.log(arr.length) // 100

// length = lastIndex + 1
// lastIndex = length - 1

const names = [
    "HM Nayem",
    "Shegufa Taranjum",
    "Shayaike Salvy",
    "Badhon Khan",
    "Sakib Al Islam",
]

names[5] = "Asief Mahir";

console.log(names) // [ 'HM Nayem', 'Shegufa Taranjum', 'Shayaike Salvy', 'Badhon Khan', 'Sakib Al Islam', 'Asief Mahir' ]

// tricks
names[names.length] = "Mehedi Hasan";

console.log(names) // [ 'HM Nayem', 'Shegufa Taranjum', 'Shayaike Salvy', 'Badhon Khan', 'Sakib Al Islam', 'Asief Mahir', 'Mehedi Hasan' ]
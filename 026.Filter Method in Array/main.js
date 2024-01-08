const studentArray = [
  {
    id: 1,
    name: "HM Nayem",
    gpa: 3.99,
    email: "nayem@gmail.com",
    due: true,
    dueAmount: 10000,
  },
  {
    id: 2,
    name: "Shegufa Taranjum",
    gpa: 3.87,
    email: "shegufa@gmail.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 3,
    name: "Tamim",
    gpa: 3.8,
    email: "tamim@gmail.com",
    due: true,
    dueAmount: 5000,
  },
  {
    id: 4,
    name: "Asief Mahir",
    gpa: 3.9,
    email: "mahir@gmail.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 5,
    name: "Abir Azim",
    gpa: 3.7,
    email: "abir@gmail.com",
    due: true,
    dueAmount: 2000,
  },
];

// custom filter function
const filter = function (array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// gpa under 3
const lowGPA = filter(studentArray, function (student) {
  return student.gpa < 3.9;
});

console.log(lowGPA);
/*
[
  {
    id: 2,
    name: 'Shegufa Taranjum',
    gpa: 3.87,
    email: 'shegufa@gmail.com',
    due: false,
    dueAmount: 0
  },
  {
    id: 3,
    name: 'Tamim',
    gpa: 3.8,
    email: 'tamim@gmail.com',
    due: true,
    dueAmount: 5000
  },
  {
    id: 5,
    name: 'Abir Azim',
    gpa: 3.7,
    email: 'abir@gmail.com',
    due: true,
    dueAmount: 2000
  }
]
*/

// shortcut filter function
const highGPA = studentArray.filter((student) => student.gpa >= 3.9);
console.log(highGPA);
/*
[
  {
    id: 1,
    name: 'HM Nayem',
    gpa: 3.99,
    email: 'nayem@gmail.com',
    due: true,
    dueAmount: 10000
  },
  {
    id: 4,
    name: 'Asief Mahir',
    gpa: 3.9,
    email: 'mahir@gmail.com',
    due: false,
    dueAmount: 0
  }
]
*/
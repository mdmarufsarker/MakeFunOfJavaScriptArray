const studentArray = [
  {
    id: 1,
    name: "HM Nayem",
    gpa: 3.99,
    email: "nayem@gmail.com",
  },
  {
    id: 2,
    name: "Shegufa Taranjum",
    gpa: 3.87,
    email: "shegufa@gmail.com",
  },
  {
    id: 3,
    name: "Tamim",
    gpa: 3.8,
    email: "tamim@gmail.com",
  },
  {
    id: 4,
    name: "Asief Mahir",
    gpa: 3.9,
    email: "mahir@gmail.com",
  },
  {
    id: 5,
    name: "Abir Azim",
    gpa: 3.7,
    email: "abirazim@gmail.com",
  },
];

const mappedStudent = studentArray.map(function (student) {
  return {
    ...student,
    email: `${student.email}`,
    msg: `Hello ${student.name} - ${student.id}. Your GPA is ${student.gpa}.`,
    result: student.gpa >= 3.8 ? "Passed" : "Failed",
  };
});
console.log(mappedStudent);

/*
[
  {
    id: 1,
    name: 'HM Nayem',
    gpa: 3.99,
    email: 'nayem@gmail.com',
    msg: 'Hello HM Nayem - 1. Your GPA is 3.99.',
    result: 'Passed'
  },
  {
    id: 2,
    name: 'Shegufa Taranjum',
    gpa: 3.87,
    email: 'shegufa@gmail.com',
    msg: 'Hello Shegufa Taranjum - 2. Your GPA is 3.87.',
    result: 'Passed'
  },
  {
    id: 3,
    name: 'Tamim',
    gpa: 3.8,
    email: 'tamim@gmail.com',
    msg: 'Hello Tamim - 3. Your GPA is 3.8.',
    result: 'Passed'
  },
  {
    id: 4,
    name: 'Asief Mahir',
    gpa: 3.9,
    email: 'mahir@gmail.com',
    msg: 'Hello Asief Mahir - 4. Your GPA is 3.9.',
    result: 'Passed'
  },
  {
    id: 5,
    name: 'Abir Azim',
    gpa: 3.7,
    email: 'abirazim@gmail.com',
    msg: 'Hello Abir Azim - 5. Your GPA is 3.7.',
    result: 'Failed'
  }
]
*/

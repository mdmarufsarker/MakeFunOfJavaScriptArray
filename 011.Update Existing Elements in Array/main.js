// Easy One
const numbers = [1, 2, 7, 4, 5];
numbers[2] = 3;

// Array of Objects
const students = [
  {
    id: 1,
    name: "Nayem",
  },
  {
    id: 2,
    name: "Shegufa",
  },
  {
    id: 3,
    name: "Shayaike",
  },
];

const id = 3;
const newName = "Shayaike Salvy";

for (let i = 0; i < students.length; i++) {
  if (students[i].id === id) {
    students[i].name = newName;
    break;
  }
}

console.log(students);
// [
//     { id: 1, name: 'Nayem' },
//     { id: 2, name: 'Shegufa' },
//     { id: 3, name: 'Shayaike Salvy' }
// ]

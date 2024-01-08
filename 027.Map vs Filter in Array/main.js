// modify or change --> map
// find out using logic --> filter

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

const emailTemplate = studentArray
  .filter((value) => value.gpa < 3.8)
  .map((value) => {
    return {
      ...value,
      title: `Scholarship`,
      msg: `Dear ${value.name}, you are not eligible for the scholarship.`,
    };
  });

console.log(emailTemplate);

/*
[
  {
    id: 5,
    name: 'Abir Azim',
    gpa: 3.7,
    email: 'Dear Abir Azim, you are not eligible for the scholarship.',
    due: true,
    dueAmount: 2000,
    title: 'Scholarship'
  }
]
*/

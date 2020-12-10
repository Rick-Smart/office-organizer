module.exports = [
  {
    type: "input",
    name: "name",
    message: "Employee Name",
  },
  {
    type: "input",
    message: "What is the employee id?",
    name: "id",
  },
  {
    type: "list",
    message: "What is the employee role?",
    name: "role",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Employee email?",
    name: "email",
  },
  {
    type: "input",
    name: "github",
    message: "GitHub user name?",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    name: "school",
    message: "School Name?",
    when: (answers) => answers.role === "Intern",
  },
  {
    type: "confirm",
    name: "again",
    message: "Enter another employee? ",
    default: true,
  },
];

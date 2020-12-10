const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/questions");
const managerQuestions = require("./lib/managerQuestions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const staff = [];
const render = require("./lib/htmlRenderer");

inquirer.prompt(managerQuestions).then((managerResponse) => {
  let emp = new Manager(
    managerResponse.name,
    managerResponse.email,
    managerResponse.id,
    managerResponse.officeNumber
  );
  staff.push(emp);
  employees();
});

function employees() {
  inquirer.prompt(questions).then((response) => {
    if (response.role === "Engineer") {
      let emp = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      staff.push(emp);
    }
    if (response.role === "Intern") {
      let emp = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      staff.push(emp);
    }
    if (response.again) {
      employees();
    } else {
      const template = render(staff);
      fs.writeFile(outputPath, template, (err) =>
        err ? console.log(err) : console.log("success!")
      );
    }
  });
}

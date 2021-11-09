const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    //fill in questions
  ])
  .then((answer) =>
    fs.writeFile(
      "README.md",
      //write README with pulled values from answers
      `${answer}`,
      (err) => {
        err ? console.error(err) : console.log("Success!");
      }
    )
  );

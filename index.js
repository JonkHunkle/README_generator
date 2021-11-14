const Apache =
  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
const Eclipse =
  "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
const MIT =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const mozilla =
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

const inquirer = require("inquirer");
const fs = require("fs");
const { type } = require("os");

inquirer
  .prompt([
    //fill in questions
    {
      name: "title",
      message: "What is the title of your project?",
      type: "input",
    },
    {
      name: "description",
      message: "Give me a quick description of your project!",
      type: "input",
    },
    {
      name: "installation",
      type: "input",
      message: "How can I install the needed utilities? "
    },
    {
      name: "howTo",
      message: "How do you use this application?",
      type: "input",
    },
    {
      name: "contribute",
      type: "input",
      message: "How can others contribute to this project?",
    },
    {
      name: "license",
      type: "list",
      message: "Do you have any licensing?",
      choices: ["Apache", "Eclipse", "MIT", "Mozilla"],
    },
  ])
  .then((answer) => {

    switch (answer.license) {
      case "Apache":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "Eclipse":
        badge =
          "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case "MIT":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Mozilla":
        badge =
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
    }
    fs.writeFile(
      "READMEsample.md",
      //write README with pulled values from answers in  backticks
      `# ${answer.title.toUpperCase()}
  ---
${badge}
  ---
      ${answer.description}

  **Table of Contents**

  ---
1. [Documentation](#documentation)  
2. [Quick-use Guide](#guide)
3. [How to Contribute](#contribute)
4. [Test Run](#run)
      
---  

## Documentation


${answer.installation}  

---

## Quick-use Guide

---

${answer.howTo}

---

## How to contribute

---

${answer.contribute}

---
      `,
      (err) => {
        err ? console.error(err) : console.log("Success!");
      }
    );
  });

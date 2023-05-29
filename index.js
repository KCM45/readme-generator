/** @format */

//const inquirer = require("inquirer");
import inquirer from "inquirer";
import * as fs from "fs";

// Prompt users for questions
inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of your project?",
      type: "input",
    },
    {
      name: "description",
      message: "What is the description of your project?",
      type: "input",
    },
    {
      name: "installation",
      message: "What are the installation instructions?",
      type: "input",
    },
    {
      name: "usage",
      message: "Which license?",
      type: "list",
      choices: ["Apache License 2.0", "MIT License"],
    },
    {
      name: "username",
      message: "What is your GitHub username?",
      type: "input",
    },
  ])
  .then((answers) => {
    const md = generateMD(
      answers.title,
      answers.description,
      answers.installation,
      answers.usage,
      answers.username
    );
    writeREADME(md);
  });
``;
function generateMD(title, description, installation, usage, username) {
  const md = `# ${title} 
  
  ## Description
  ${description}

  ## Table of Contents
  1. [Installation](#Installation)
  2, [Usage](#Usage)
  3. [Contributing](#Contributing)
  4. [Tests](#Tests)
  5. [Questions](#Questions)
  
  ### Installation
  ${installation}
  
  ### Usage
  ${usage}
  
  ### Contributing
  
  ### Tests
  
  ### Questions
  [GitHub](https://github.com/${username})`;
  return md;
}

const writeREADME = (md) => {
  fs.writeFile("./readme_output/README.md", md, function (err, result) {
    if (err) console.log("error", err);
  });
};

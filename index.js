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
  ])
  .then((answers) => {
    const md = generateMD(answers.title, answers.description);
    writeREADME(md);
  });
``;
function generateMD(title, description) {
  const md = `# ${title} 
  
  ## Description
  ${description}

  ## Table of Contents
  
  ## Installation
  
  ## Usage
  
  ## License
  
  ## Contributing
  
  ## Tests
  
  ## Questions`;
  return md;
}

const writeREADME = (md) => {
  fs.writeFile("./readme_output/README.md", md, function (err, result) {
    if (err) console.log("error", err);
  });
};

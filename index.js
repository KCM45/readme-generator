/** @format */

const inquirer = require("inquirer");

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
    const [title, description] = answers;
    const md = generateMD(title, description);
  });

function generateMD(title, description) {
  console.log(title, description);
}

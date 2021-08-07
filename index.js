const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project´s title",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project",
  },
  {
    type: "input",
    name: "installation",
    message:
      "What command line code should I enter to begin dependencies installation?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide any relevant usage information about your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide any relevant contributing information about your project",
  },
  {
    type: "input",
    name: "test",
    message: "What command line code should I enter to run tests?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license type for your project",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Type your GitHub user name",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// Used writeFileSync from file system in Node toguether with process.cwd (current working directory) to create following function
// -https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// -https://www.geeksforgeeks.org/node-js-process-cwd-method/
// also imported path module to work with directory files
// -https://nodejs.org/api/path.html
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Used inquirer to prompt questions on command line
// -https://www.npmjs.com/package/inquirer
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Your new README file is now CREATED");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// Initialization call
init();

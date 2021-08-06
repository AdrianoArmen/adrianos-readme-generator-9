// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter your project´s title",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe your project´s installation instructions',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide any relevant usage information about your project',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide any relevant contributing information about your project',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide instructions to run tests in your project',
        default: 'npm test',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a license template to add into your project',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

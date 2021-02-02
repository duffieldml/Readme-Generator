// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "username",
    message: "What is your github username?",
    },
    {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
    },
    {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project",
    },
    {
    type: "checkbox",
    name: "contents",
    message: "Please select all what contents you want in your readme",
    choices: ['Installation', 'Usage', 'License', 'Contributors', 'Tests', 'Questions'],
    },
    {
    type: "input",
    name: "instructions",
    message: "Please provide step by step installation instructions",
    },
    {
    type: "input",
    name: "usage",
    message: "What is the usage",
    },
    {
    type: "list",
    name: "license",
    message: "What lisence will the project use?",
    choices: ['MIT', 'GNU', 'Apache'],
    },
    {
    type: "input",
    name: "contributors",
    message: "List all contributors' github name. Please seperate multiple entries by commas.",
    },
    {
    type: "input",
    name: "tests",
    message: "Please detail the testing procedures",
    },
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

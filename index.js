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
    name: "contributing",
    message: "Who is contributing? List all contributors' github name. Please seperate multiple entries by commas.",
    },
    {
    type: "input",
    name: "tests",
    message: "Please detail the testing procedures",
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    console.log(data);
    //Takes contributors and splits them
    let gitCont = data.contributing.split(',');
    let gitUser = [];
    gitCont.map(user => gitUser.push(user.trim()));
    let gitStr = '';
    gitUser.map(user => {
        gitStr += `[${user}]('https://github.com/${user}') \n`
    })
    
    let content = '';

    console.log(content);
    console.log(gitCont);

    //Code to take input info and put it in the template readme
    const generateRead = (data) =>
    `
    # ${data.title}
    ${data.license}

    ## Description

    ${data.description}

    ## Table of Contents

    ${content}

    ## Installation
    To install dependencies, run the following command(s):

    ${data.instructions}

    ## Usage

    ${data.usage}

    ## License

    This project uses the ${data.license} license.

    ## Contributing

    ${gitStr}
    `


}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
        })
}
// Function call to initialize app
init();

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
    name: "email",
    message: "What is your email address?",
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
    choices: ['Installation', 'Usage', 'License', 'Contribution-Guidelines', 'Contributors', 'Tests', 'Questions'],
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
gitStr += `[${user}](https://github.com/${user}) \n`
})

//creates a clickable link for email
let mail = `[${data.email}](mailto:${data.email})`

let content = '';

//this creates the table of contents area
data.contents.map(info => {
    content += `* [${info}](#${info.toLowerCase()}) \n`
})

//area for deciding what license was picked
let license = data.license === 'MIT' ? "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)" :
data.license === 'GNU' ? "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)" :
"![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)" 

// console.log(content);
// console.log(gitCont);

//Code to take input info and put it in the template readme
let readTemp =
`# ${data.title}
${license}

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

This project is licensed under the terms of the ${data.license} license.

## Contribution-Guidelines

If you wish to contribute. Please refer to the following guidelines:
[Contributor Covenant](https://www.contributor-covenant.org/)

## Contributors

${gitStr}

## Tests

To test the application, please do the following:
${data.tests}

## Questions

If you have any questions regarding the repo, application, or issues you are experiencing, please email
the following:
${mail}
`
fs.writeFile(`${data.title}.md`, readTemp, (err) => 
err ? console.log(err) : console.log("Success!"));

}


// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        // .then((data) => writeFileAsync(`${data.title}.md`, writeToFile(data)))
        .then((data) => writeToFile(data))
        .catch((err) => console.error(err));
}
// Function call to initialize app
init();

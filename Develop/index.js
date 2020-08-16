const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Name of the user",
        name: "username"
    },
    {
        type: "input",
        message: "Please provide a description of the project",
        name: "description"
    },
    {
        type: "confirm",
        message: "Please provide a table of content?",
        name: "tableContent"
    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will this project be used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Who were the contributers to the project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What is the test process for the project?",
        name: "test"
    },
    {
        type: "list",
        message: "What licenses are required to use this project?",
        name: "licenses",
        choices: [
            "Apache License 2.0",
            "MIT License",
            "GNU General Public License 3.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        message: "GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What email would you like to use for contact info?",
        name: "email"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err)
            return console.log(err);
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        console.log("Making README.md file");
        writeToFile("README.md", data);
    });
}

// function call to initialize program
init();

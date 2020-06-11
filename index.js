// Global Varibles
var fs = require("fs");

var inquirer = require("inquirer");

var generateMarkdown = require("./utils/generateMarkdown")

//Questions
var questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter your project title!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "description",
            message: "Please describe the project:",
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter a project description!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "install",
            message: "If there is a installation process please write it out in code:",
        },
        {
            type: "input",
            name: "usage",
            message: "What will this project be used for?",
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please enter a project useage!');
                  return false;
                }
              }
        },
        {
            type: "list",
            name: "licences",
            message: "What licences will go along with this project:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "How should people help contribute to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "If there are tests needed done for this project please describe them:"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: ",
            validate: usernameInput => {
                if (usernameInput) {
                  return true;
                } else {
                  console.log('Please enter a Github username!');
                  return false;
                }
              }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email please:",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
              }
        }
    ]);
} 


// function call to initialize program
init();
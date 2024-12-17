// TODO: Include packages needed for this application
import fs from "fs";
import Inquirer from "inquirer";
import path from 'path';
import generateMarkdown  from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Project title?",
        name: "title",
    },
    
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of the project",

        
    },

    {
        type: 'input',
        message: "What was your motivation for creating this application?",
        name: 'motivation',
    },

    {
        type: "checkbox",
        message: "Select a license type",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3-Clause", "none"],
    },

    {
        type: 'input',
        message: "Please list any additional contributors",
        name:"contributors"
    },
    {
        type: 'input',
        message: "Please provide the packages that must be installed",
        name: 'requirments'
    },

    {
        type: 'input',
        message: "Please include testing instructions",
        name: 'tests'
    },

    {
        type: 'input',
        message: "What is your github username?",
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your Email',
        name: 'email'
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, data);
    }


// TODO: Create a function to initialize app
function init() {
    Inquirer.prompt(questions).then((responses) => {
        console.log("Generating new READEME.md...");
        writeToFile("README.md", generateMarkdown({...responses}));
    });
 }

// Function call to initialize app
init()

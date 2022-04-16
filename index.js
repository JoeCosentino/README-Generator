// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = projectData => {
    console.log(projectData);
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                } else {
                    console.log('Please enter your github account name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please provide a description of your project',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please provide an installation link for you project (HTTP or SSH)',
            validate: installationLink => {
                if (installationLink) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please discuss the main usage intended for this application',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please write which license you chose to use for this project',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please elaborate on how fellow developers can contribute to your project',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please describe how a user can test the application through their terminal',
            validate: testingInput => {
                if (testingInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please let developers know how they can reach out for questions. Please provide an email address',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
fs.writeFile('READMe.md', projectData, err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });

// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

questions();



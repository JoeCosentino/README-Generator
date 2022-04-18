// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile, generateMarkdown } = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
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
            name: 'repository',
            message: 'Please enter the github repository for this project',
            validate: repoInput => {
                if (repoInput){
                    return true;
                } else {
                    console.log('Please enter the github repository for this project');
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
            name: 'email',
            message: 'Please provide an email address so that people with questions can reach out to you.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
    ]);
};

questions().then(function(answers){
    console.log(answers);
    return generateMarkdown(answers);
})
.then(pageREADME => {
    writeFile(pageREADME);
})





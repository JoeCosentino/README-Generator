// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string 
// function renderLicenseSection(license) {}

// ${renderLicenseLink(data.license)}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.name}

## Github Repository

you can find the repository for this project here: ${data.repository}

## Description of Project

${data.Description}

## Installation

You can follow this link to download this project to your local computer: ${data.link}

## Intended Usage

${data.usage}

## Licensing

For this project, the ${data.license} license was used.

## Collaboration

The following is how fellow developers can contribute to this project: ${data.contribution}

## Testing

Follow these instructions for testing this application: ${data.testing}

## Questions

If you would like to reach out to me with further questions, you can contact me either on GitHub or via email. You can find the information for both below:
${data.email}
${data.github}
`;
}

// ABOVE WAS ALL GIVEN STARTER CODE
const fs = require('fs');



const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
          }

          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

module.exports = { writeFile, generateMarkdown };

// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');

// Define the questions for the Inquirer prompt
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
  },
];

// Define a function to generate the README.md content based on the user's input
function generateReadme(answers) {
    return `# ${answers.title}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## Contribution
  
  ${answers.contribution}
  
  ## Tests
  
  ${answers.test}
  
  ## License
  
  ${answers.license}
  `;
  }

  // Use the Inquirer prompt to get user input and write the README.md file
inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateReadme(answers);
  
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error('Error writing README.md file:', err);
      } else {
        console.log('README.md file successfully generated!');
      }
    });
  });
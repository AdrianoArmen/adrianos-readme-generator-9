// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// Using shields.io to render the license type banner taking the "license" param to display it dynamicly
// https://shields.io/category/license
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// markup layout for a functional link to be generated on readme
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// markup section to display license calling license param into layout
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 📋

${data.description}

## Table of Contents 🔧

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 🛠️

To begin dependencies installation run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage 📄

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing 👥

${data.contributing}

## Tests 📦

To run tests enter the following command:

\`\`\`
${data.test}
\`\`\`

## Questions 🚀

If you have any questions send me an email at ${
    data.email
  }. Here is my GitHub profile [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;

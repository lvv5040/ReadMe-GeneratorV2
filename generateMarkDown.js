// we need to return a string form of the readme

function generateMarkdown(data) {
return (
`
#${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
    
## Title

${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
\`\`\`
${data.installation}
\`\`\`
## Usage

${data.usage}

## License
This project is licensed under the ${data.license} license

${data.license}

## Contributing

${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`
## Questions

${data.questions}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).


##

* [License](#license)

            
`
    );
}

module.exports = generateMarkdown;
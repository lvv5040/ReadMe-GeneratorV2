const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");
const generateMarkdown = require("./generateMarkDown");

// function formating(answers) {
// var results = "";

// console.log("formating function", answers)

// results = results.concat("# " + answers.title) 
// results = results.concat("\n")
// results = results.concat("# " + answers.description)
// console.log(results)
// results = results.concat("# " + answers.tableOfContents) 
// results = results.concat("\n")
// results = results.concat("# " + answers.installation) 
// results = results.concat("\n")
// results = results.concat("# " + answers.usage) 
// results = results.concat("\n")
// results = results.concat("# " + answers.license) 
// results = results.concat("\n")
// results = results.concat("# " + answers.contributing) 
// results = results.concat("\n")
// results = results.concat("# " + answers.tests) 
// results = results.concat("\n")
// results = results.concat("# " + answers.questions) 
// results = results.concat("\n")

// return results
// }

function start() {

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What would you title your ReadMe?"
      },
      {
        type: 'input',
        name: 'description',
        message: "What is your description for your ReadMe?"
      },
      {
        type: 'input',
        name: 'installation',
        message: "What is the installation of your ReadMe?"
      },
      {
        type: 'input',
        name: 'usage',
        message: "What is the use of your ReadMe?"
      },
      {
        type: "list",
          name: "license",
          message: "What kind of license would you like to have?",
          name: "license",
          choices: [
            {
            name: "MIT",
            value: "MIT"
            },
            {
            name:"APACHE 2.0",
            value: "APACHE%202.0"
            },
            {
            name:"GPL v3",
            value: "GPL%20v3"
            },
            {
            name:"BSD 3",
            value: "BSD%203"
            },
            {
            name:"None",
            value: "None"
            }
          ]},
      {
        type: 'input',
        name: 'contributing',
        message: "What is contributing to your ReadMe?"
      },
      {
        type: 'input',
        name: 'tests',
        message: "What tests are there for your ReadMe?"
      },
      {
        type: 'input',
        name: 'questions',
        message: "What questions are in your ReadMe?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your email?"
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your github?"
      }
  ])
  .then(answers => {

    console.log("Loading new ReadMe ...");

    console.log("answers: ",answers);

    //where are we writing
    const filePath = path.join(process.cwd(),"README1.md");
    //what are we writing
    const data = generateMarkdown({...answers});

    console.log("data: ",data);

    fs.writeFileSync(filePath,data);
  })
  .catch(error => {
    console.log(error);
  });

}

start();
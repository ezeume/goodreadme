var inquirer = require("inquirer");
var fs = require("inquirer");

inquirer
.prompt([
    {
        type: "input",
        message: "What is the Project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the Description?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    }
    
])
.then(function(response){
    console.log(response.title);
    var markdowntext =  `
    # ${response.title}
    
    `;
    fs.writeFile("log.txt", markdowntext, function(err){

    })
})

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

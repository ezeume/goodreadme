var inquirer = require("inquirer");
var fs = require('fs');
var getReadme = require('./utils/generateMarkdown');
var getApi = require('./utils/api');



// const questions = [

// ];

// function init() {
inquirer
.prompt([
    {
        type: "input",
        message: "What is your github acct?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the Description?",
        name: "description"
    },
    {
        type: "input",
        message: "How is it installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage?",
        name: "usage"
    },
    {
        type: "input",
        message: "Do you have a License?",
        name: "license"
    },
    {
        type: "input",
        message: "Any contribution?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Did you run any tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "ask questions?",
        name: "questions"
    },
    // {
    //     type: "input",
    //     message: "What is your email?",
    //     name: "email"
    // },
    // {
    //     type: "input",
    //     message: "add a pic?",
    //     name: "picture"
    // },
    
])


.then(async function(response){
    // console.log(response.title);
    var gitData = await getApi(response.username)
    console.log(response)
    console.log(gitData);

    fs.writeFile("newReadme.md", getReadme(response, gitData), function(err){
        if (err){
            throw err
        }

    })
})

// }


//6
// function writeToFile(fileName, data) {
    //using fs I will write the file you just created via generatemarkdown.js
// }

// init();

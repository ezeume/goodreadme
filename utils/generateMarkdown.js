

function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}
  
  
  
  
  # Table of content
  
  
  1. Installation
  2. Usage
  3. License
  4. Contribution
  5. Tests
  6. Questions
  7. Author
  8. Email
  
  # Installation
  ${data.install}
  
  
  # Usage
  ${data.usage}
  
  # Lincense
  ${data.license} 
  
  # Contribution
  ${data.contribution}
  
  # Tests
  ${data.tests}
  
  # Questions
  ${data.questions}
  
  # Author
  ${data.author}
  
  # Email
  ${data.email}

`;
}

module.exports = generateMarkdown;

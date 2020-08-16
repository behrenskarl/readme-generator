// function to generate markdown for README
function generateMarkdown(data) {
  let badge = "";
  let licenseInfo = "";

  if (data.license === "Apache License 2.0") {

  }
  else if (data.license === "MIT License") {

  }
  else if (data.license === "GNU General Public License 3.0") {

  }
  else if (data.license === "The Unlicense") {
    
  }
  //if/else statement determines which literal template to use: true uses the table of contents, false has no table of contents in the template
  if (data.tableContent === true) {
    return `
    ### ${data.title}
    ---

    ## Description:
    
    ${data.description}
    
    ## Table of Contents:
    - [installation](#installation)
    - [usage](#usage)
    - [contribution](#contribution)
    - [licenses](#licenses)
    - [test](#test)
    - [contact](#contact)
    
    ## Installation:
    ${data.installation}

    ## Usage:
    ${data.usage}

    ## Contribution:
    ${data.contribution}

    ## Licenses:
    ${data.licenses}

    ## Test:
    ${data.test}

    ## Contact:
    
    GitHub: https://github.com/${data.github}

    Email: ${data.email}
    


  `;
  }
  else {
    return `
    ### ${data.title}
    ---

    ## Description:
    
    ${data.description}
    
    ## Installation:
    ${data.installation}

    ## Usage:
    ${data.usage}

    ## Contribution:
    ${data.contribution}

    ## Licenses:
    ${data.licenses}

    ## Test:
    ${data.test}

    ## Contact:
    
    GitHub: https://github.com/${data.github}

    Email: ${data.email}
    `;
  }
}

module.exports = generateMarkdown;

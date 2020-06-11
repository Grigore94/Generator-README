// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/License-${ data.licences }-blue.svg)

  ## Table of Contests
  -[Description](#description)
  -[Instalation](#install)
  -[Usage](#usage)
  -[Licences](#licences)
  -[Contribution](#contribution)
  -[Test](#tests)
  -[Question](#questions)

  ##Description
  ### ${data.description}

  ##Instal
  ${data.install}

  ##Usage
  ### ${data.usage}

  ##Licence
  ${data.licences}

  ##Contribution
  ### ${data.contribution}

  ##Test
  ### ${data.tests}

  ##Questions
  ###### [${ data.username } for GitHub](https://github.com/)  
  ### ${ data.email } for ✉️ email
`;
}

module.exports = generateMarkdown;

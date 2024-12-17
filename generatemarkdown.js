// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license && license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  } else
    return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && license !== "none") {
    return `\n* [License](#license)\n`
  } return "";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && license !== "none") {
    return `Licensed under the ${license} license.`
  } else
    return " ";


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  #### Hello World! It's *${data.name}*.
  ### ${renderLicenseBadge(data.license)}
 
  ## Table of Contents 📝
  * [Description](#description 🧑‍💻)
  * [Installation](#installation 🏋️)
  * [Contributors](#contributors 🤝)
  * [Tests](#tests 🧪)
  * [license Info](#license)
  * [Questions](#Questions? 🤖)
  
  ## Description 🧑‍💻
  ${data.description}
  ${data.motivation}

  ## Installation 🏋️
  The packages that must be installed for this application to workout: *${data.requirments}*

  ## Contributors 🤝
  ${data.contributors}

  ## Tests 🧪
  ${data.tests}
 
### Questions? 🤖
#### GitHub:
  Github.com/${data.username}
 #### Email:
   ${data.email}
  
  ### License 
  ${renderLicenseSection(data.license)}
   `;
}

export default generateMarkdown

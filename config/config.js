// config.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  percyToken: process.env.PERCY_TOKEN,
  sonarToken: process.env.SONAR_TOKEN,
  lhciGithubAppToken: process.env.LHCI_GITHUB_APP_TOKEN,
};

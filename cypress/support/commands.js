import { loadLoginPage, fillPatientInformation } from "./commands_functions";

Cypress.Commands.add("loginAndSignIn", (userName, password) => {
  loadLoginPage();
  fillPatientInformation(userName, password);
});

import {loadLoginPage, fillUserInformation, fillNewUserInformation} from "./commands_functions";

Cypress.Commands.add("loginAndSignIn", (userName, password) => {
  loadLoginPage();
  fillUserInformation(userName, password);
});

Cypress.Commands.add("createNewUser", (userName, password, confirmPassword) => {
  fillNewUserInformation(userName, password, confirmPassword);
});

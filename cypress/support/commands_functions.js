import { LoginPage } from "./pages/LoginPage";

let loginPage = new LoginPage();

export function loadLoginPage() {
  cy.visit(loginPage.url);
}

export function fillUserInformation(userName, password) {
  loginPage.enterToEmailField(userName);
  loginPage.enterToPasswordField(password);
  loginPage.clickLoginButton();
}

export function fillNewUserInformation(userName, password, confirmPassword) {
  loginPage.clickSignUpButton();
  loginPage.getConfirmPasswordField().should("exist")
  loginPage.enterToEmailField(userName);
  loginPage.enterToPasswordField(password);
  loginPage.enterToConfirmPasswordField(confirmPassword);
  loginPage.clickLoginButton();
}

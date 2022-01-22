import { LoginPage } from "./pages/LoginPage";

let loginPage = new LoginPage();

export function loadLoginPage() {
  cy.visit(loginPage.url);
}

export function fillPatientInformation(userName, password) {
  loginPage.enterToEmailField(userName);
  loginPage.enterToPasswordField(password);
  loginPage.clickLoginButton();
}

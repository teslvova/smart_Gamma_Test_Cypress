import { LoginPage } from "./pages/LoginPage";
import {AccountPage} from "./pages/AccountPage";

let loginPage = new LoginPage();
const accountPage = new AccountPage();

export function loadLoginPage() {
  let title = "SmartGammaTest";
  cy.visit("/");
  cy.title().should("eq", title);
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
  accountPage.getAddButton().should("be.visible")
}

import { LoginPage } from "../../support/pages/LoginPage.js";
import { UserData } from "../../fixtures/UserData";
import {AccountPage} from "../../support/pages/AccountPage.js";

const loginPage = new LoginPage();
const accountPage = new AccountPage();
const userData = new UserData();

let unregisteredUser = "Unregistered User";

describe("Login Page", function () {

  beforeEach(function () {
    cy.loadLoginPage();
  });

  it("Create a new random user", function () {
    cy.createNewUser(userData._newUserData.username, userData._newUserData.password, userData._newUserData.password);
  });

  it("Sign in as Unregistered User", function () {
    cy.loginAndSignIn(userData._userData.username, userData._userData.password);
    loginPage.getUnRegisteredUser().should("contain.text", unregisteredUser);
  });

  it("Sign in created user", function () {
    cy.createNewUser(userData._newUserData.username, userData._newUserData.password, userData._newUserData.password);
    accountPage.logOutFunction()
    cy.loginAndSignIn(userData._userData.username, userData._newUserData.password);
    accountPage.getAddButton().should("be.visible")
  });
});

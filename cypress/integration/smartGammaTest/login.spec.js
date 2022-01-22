import { LoginPage } from "../../support/pages/LoginPage.js";
import { UserData } from "../../fixtures/UserData";
// const { DataGenerator } = require("../../common/DataGenerator.js");

const loginPage = new LoginPage();
const userData = new UserData();

// let dataGenerator = new DataGenerator();
let unregisteredUser = "Unregistered User";

describe("Login Page", function () {
  let title = "SmartGammaTest";
  beforeEach(function () {
    cy.visit("/");
    cy.title().should("eq", title);
  });

  it.skip("Create a random user", function () {
    loginPage.clickSignUpButton();
  });

  it("Sign in as Unregistered User", function () {
    cy.loginAndSignIn(userData._userData.username, userData._userData.password);
    loginPage.getUnRegisteredUser().should("contain.text", unregisteredUser);
  });

  it.skip("Sign in created user", function () {});
});

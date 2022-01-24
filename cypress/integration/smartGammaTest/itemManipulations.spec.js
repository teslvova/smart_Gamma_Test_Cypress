import { LoginPage } from "../../support/pages/LoginPage.js";
import { UserData } from "../../fixtures/UserData";
import {AccountPage} from "../../support/pages/AccountPage.js";

const loginPage = new LoginPage();
const accountPage = new AccountPage();
const userData = new UserData();

describe("Item Page", function () {

    beforeEach(function () {
        cy.loadLoginPage();
    });

    it("Create a new Item", function () {
        cy.createNewUser(userData._newUserData.username, userData._newUserData.password, userData._newUserData.password);

    });
});

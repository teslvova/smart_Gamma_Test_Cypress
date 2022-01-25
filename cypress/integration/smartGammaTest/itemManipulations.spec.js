import { UserData } from "../../fixtures/UserData";
import {AccountPage} from "../../support/pages/AccountPage.js";
import {ItemPage} from "../../support/pages/ItemPage";
import {ItemData} from "../../fixtures/ItemData";

const accountPage = new AccountPage();
const userData = new UserData();
const itemData = new ItemData();
const itemPage = new ItemPage();

let disableClass = "mat-button-disabled"
let descriptionText = "New Text for Description"
let noData = "No Data"

describe("Item Page", function () {

    beforeEach(function () {
        cy.loadLoginPage();
    });

    function createNewItem (
        username,
        password,
        confirmPassword,
        title,
        subTitle,
        imgValue,
        description,
        disableClass
    ){
        cy.createNewUser(username, password, confirmPassword);
        accountPage.clickAddButton();
        itemPage.createNewItem(title, subTitle, imgValue, description, disableClass)
        itemPage.getNewItem().should("be.visible")
        accountPage.getDescriptionOnItem().should("contain.text", itemData._itemData.description)
    }

    it("Create a new Item", function () {
        createNewItem (
            userData._newUserData.username,
            userData._newUserData.password,
            userData._newUserData.password,
            itemData._itemData.title,
            itemData._itemData.subTitle,
            itemData._itemData.imgValue,
            itemData._itemData.description,
            disableClass
        );
    });

    it("Edit Item", function () {
        createNewItem (
            userData._newUserData.username,
            userData._newUserData.password,
            userData._newUserData.password,
            itemData._itemData.title,
            itemData._itemData.subTitle,
            itemData._itemData.imgValue,
            itemData._itemData.description,
            disableClass
        );
        accountPage.clickEditItem();
        itemPage.enterEditDescriptionField(descriptionText);
        itemPage.clickSaveButton();
        accountPage.getDescriptionOnItem().should("contain.text", descriptionText)
    });

    it("Delete Item", function () {
        createNewItem (
            userData._newUserData.username,
            userData._newUserData.password,
            userData._newUserData.password,
            itemData._itemData.title,
            itemData._itemData.subTitle,
            itemData._itemData.imgValue,
            itemData._itemData.description,
            disableClass
        );
        accountPage.clickDeleteItem();
        accountPage.getNoDataTextSelector().should("contain.text", noData)
    });
});

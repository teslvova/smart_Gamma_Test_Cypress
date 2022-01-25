export class AccountPage {
    constructor() {

        /** @private */
        this._selectors = {
            addButton: "[ng-reflect-router-link='add']",
            iconButton: ".mat-icon",
            logOutButton: ".mat-menu-content",
            editItem: ".mat-card-actions > [tabindex=\"0\"]",
            deleteItem: ".mat-card-actions > :nth-child(2)",
            descriptionOnItem: ".cut-text",
            noDataTextSelector: "h3",
        };
    }

    getNoDataTextSelector() {
        return cy.get(this._selectors.noDataTextSelector);
    }

    getDescriptionOnItem() {
        return cy.get(this._selectors.descriptionOnItem);
    }

    getEditItem() {
        return cy.get(this._selectors.editItem);
    }

    getDeleteItem() {
        return cy.get(this._selectors.deleteItem);
    }

    getLogOutButton() {
        return cy.get(this._selectors.logOutButton);
    }

    getIconButton() {
        return cy.get(this._selectors.iconButton);
    }

    getAddButton() {
        return cy.get(this._selectors.addButton);
    }

    clickLogOutButton() {
        return this.getLogOutButton().click();
    }

    clickEditItem() {
        return this.getEditItem().click();
    }

    clickDeleteItem() {
        return this.getDeleteItem().click();
    }

    clickAddButton() {
        return this.getAddButton().click();
    }

    clickIconButton() {
        return this.getIconButton().click();
    }

    logOutFunction() {
        this.clickIconButton();
        this.clickLogOutButton();
    }

}

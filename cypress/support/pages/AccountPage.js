export class AccountPage {
    constructor() {

        /** @private */
        this._selectors = {
            addButton: "[ng-reflect-router-link='add']",
            iconButton: ".mat-icon",
            logOutButton: ".mat-menu-content",
        };
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

export class ItemPage {
    constructor() {

        /** @private */
        this._selectors = {
            titleField: "input#mat-input-4",
            subTitleField: "input#mat-input-5",
            imgField: "input#mat-input-6",
            descriptionField: "textarea#mat-input-6",
            saveButton: "[type='submit']",
        };
    }

    getTitleField() {
        return cy.get(this._selectors.titleField);
    }

    getSubTitleField() {
        return cy.get(this._selectors.subTitleField);
    }

    getImgField() {
        return cy.get(this._selectors.imgField);
    }

    getDescriptionField() {
        return cy.get(this._selectors.descriptionField);
    }

    getSaveButton() {
        return cy.get(this._selectors.saveButton);
    }

    enterTitleField(value) {
        return this.getTitleField().type(value);
    }

    enterSubTitleField(value) {
        return this.getSubTitleField().type(value);
    }

    enterImgField(value) {
        return this.getImgField().type(value);
    }

    enterDescriptionField(value) {
        return this.getDescriptionField().type(value);
    }

    clickSaveButton() {
        return this.getSaveButton().click();
    }

}

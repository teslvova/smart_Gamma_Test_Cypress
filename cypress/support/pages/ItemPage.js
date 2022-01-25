export class ItemPage {
    constructor() {

        /** @private */
        this._selectors = {
            titleField: "#mat-input-5",
            subTitleField: "#mat-input-6",
            imgField: "#mat-input-7",
            descriptionField: "#mat-input-8",
            editDescriptionField: "#mat-input-12",
            saveButton: "[type='submit']",
            cancelButton: ".mat-button > .mat-button-wrapper",
            img: "img",
            newItem: ".mat-card",
        };
    }

    getNewItem() {
        return cy.get(this._selectors.newItem);
    }

    getImg() {
        return cy.get(this._selectors.img);
    }

    getCancelButton() {
        return cy.get(this._selectors.cancelButton);
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

    getEditDescriptionField() {
        return cy.get(this._selectors.editDescriptionField);
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

    enterEditDescriptionField(value) {
        return this.getEditDescriptionField().should("exist").clear().type(value);
    }

    clickSaveButton() {
        return this.getSaveButton().click();
    }

    clickCancelButton() {
        return this.getCancelButton().click();
    }

    createNewItem(title, subTitle, imgValue, description, _class){
        this.enterTitleField(title)
        this.enterSubTitleField(subTitle)
        this.enterImgField(imgValue)
        this.enterDescriptionField(description)
        this.getImg().should("be.visible")
        this.getSaveButton().should("not.have.class", _class)
        this.clickSaveButton();
    }
}

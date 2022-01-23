export class LoginPage {
  constructor() {
    this._url = "/sign-in";

    /** @private */
    this._selectors = {
      emailField: "[formcontrolname='email']",
      passwordField: "[formcontrolname='password']",
      loginButton: "[type='submit']",
      signUpButton: "[ng-reflect-router-link='/sign-up']",
      confirmPasswordField: "[formcontrolname='confirmPassword']",
      unRegisteredUser: "#mat-error-0",
    };
  }

  /** @returns {string} */
  get url() {
    return this._url;
  }

  getUnRegisteredUser() {
    return cy.get(this._selectors.unRegisteredUser);
  }

  getEmailField() {
    return cy.get(this._selectors.emailField);
  }

  getPasswordField() {
    return cy.get(this._selectors.passwordField);
  }

  getLoginButton() {
    return cy.get(this._selectors.loginButton);
  }

  getSignUpButton() {
    return cy.get(this._selectors.signUpButton);
  }

  getConfirmPasswordField() {
    return cy.get(this._selectors.confirmPasswordField);
  }

  enterToPasswordField(value) {
    return this.getPasswordField().type(value);
  }

  enterToEmailField(value) {
    return this.getEmailField().type(value);
  }

  enterToConfirmPasswordField(value) {
    return this.getConfirmPasswordField().type(value);
  }

  clickLoginButton() {
    return this.getLoginButton().click();
  }

  clickSignUpButton() {
    return this.getSignUpButton().click();
  }
}

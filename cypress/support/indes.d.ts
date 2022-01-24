declare namespace Cypress {
  interface Chainable {
    loginAndSignIn(username: string, password: string): Chainable;
    createNewUser(username: string, password: string, confirmPassword: string): Chainable;
    loadLoginPage(): Chainable;
  }
}

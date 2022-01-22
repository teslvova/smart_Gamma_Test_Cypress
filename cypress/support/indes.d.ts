declare namespace Cypress {
  interface Chainable {
    loginAndSignIn(username: string, password: string): Chainable;
  }
}

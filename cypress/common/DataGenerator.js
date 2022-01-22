import { DateTimeFormatter, LocalDate } from "@js-joda/core";

/** Base Data generator. Provides common userData generation methods for the test suite. */
export class DataGenerator {
  constructor() {
    this.paymentCards = payment_cards;
    this.numChars = "0123456789";
    this.alphaChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    this.alphaNumChars = this.alphaChars + this.numChars;
  }

  /**
   * @returns {string} Card expiry MM/YY format, 2 months and 3 (or 4) years in
   *   the future.
   */
  generateCardExpiryMMYY() {
    return new LocalDate.now()
      .plusMonths(2)
      .plusYears(3)
      .format(DateTimeFormatter.ofPattern("MM/yy"));
  }

  /**
   * @returns {string} Any date in the pattern DD/MM/YYYY numberOfDays defaults
   *   to today (pass in negative numbers for past dates, positive numbers for
   *   future dates).
   */
  formatDateDDMMYYYY(numberOfDays = 0) {
    return new LocalDate.now()
      .plusDays(numberOfDays)
      .format(DateTimeFormatter.ofPattern("dd/MM/yyyy"));
  }

  /**
   * @returns {string} Any date in the pattern MM/DD/YYYY numberOfDays defaults
   *   to today (pass in negative numbers for past dates, positive numbers for
   *   future dates).
   */
  formatDateMMDDYYYY(numberOfDays = 0) {
    return new LocalDate.now()
      .plusDays(numberOfDays)
      .format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
  }

  /**
   * @returns {string} Any date in the pattern YYYY/MM/DD numberOfDays defaults
   *   to today (pass in negative numbers for past dates, positive numbers for
   *   future dates).
   */
  formatDateYYYYMMDD(numberOfDays = 0) {
    return new LocalDate.now()
      .plusDays(numberOfDays)
      .format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
  }

  /**
   * @returns {string} Any date in the pattern YYYY-MM-DD numberOfDays defaults
   *   to today (pass in negative numbers for past dates, positive numbers for
   *   future dates).
   */
  formatDateHyphenYYYYMMDD(numberOfDays = 0) {
    return new LocalDate.now()
      .plusDays(numberOfDays)
      .format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
  }

  /** Generate a string from the provided characters of the provided length. */
  generateRandomStringWithCharSet(possibleChars, length) {
    let text = "";
    for (let i = 0; i < length; i++)
      text += possibleChars.charAt(
        Math.floor(Math.random() * possibleChars.length)
      );
    return text;
  }

  generateRandomAlphaNumeric(length) {
    return this.generateRandomStringWithCharSet(this.alphaNumChars, length);
  }

  generateRandomNumber() {
    return Math.random() * (99999.99 - 1.0) + 1.0;
  }

  generateRandomNumberOfLength(length) {
    return Math.random() * (length - 1.0) + 1.0;
  }

  generateRandomString() {
    return Math.random().toString(36).substring(8);
  }

  generateRandomDateNowString() {
    return Date.now() + Math.random();
  }

  generateRandomAlpha(length) {
    return this.generateRandomStringWithCharSet(this.alphaChars, length);
  }

  generateRandomPaymentUSD() {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let amount = this.generateRandomNumber();
    return formatter.format(amount);
  }

  generateRandomTestEmail(numberOfCharacters) {
    return (
      this.generateRandomAlphaNumeric(numberOfCharacters) +
      "@" +
      this.generateRandomAlphaNumeric(numberOfCharacters) +
      ".com"
    );
  }

  generateRandomGmailTestEmail(numberOfCharacters) {
    return this.generateRandomAlphaNumeric(numberOfCharacters) + "@gmail.com";
  }
}

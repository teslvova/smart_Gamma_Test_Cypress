import { DataGenerator } from "../../../cypress/common/DataGenerator";
const dataGenerator = new DataGenerator();

/** Selectors and functions that are unique to the Patient Info page. */
export class UserData extends DataGenerator {
  constructor() {
    super();

    this._userData = {
      username: "Vova",
      password: dataGenerator.generateRandomAlphaNumeric(5),
    };
  }
}

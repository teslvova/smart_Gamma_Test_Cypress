import {DataGenerator} from "../common/DataGenerator";

export class UserData extends DataGenerator {
  constructor() {
    super();

    this._userData = {
      username: "Vova",
      password: this.generateRandomAlphaNumeric(5),
    };

    this._newUserData = {
      username: "Vova",
      password: this.generateRandomAlphaNumeric(5),
    };
  }
}

import {DataGenerator} from "../common/DataGenerator";

export class ItemData extends DataGenerator {
  constructor() {
    super();

    this._itemData = {
      title: "New Title" + this.generateRandomAlphaNumeric(5),
      subTitle: this.generateRandomAlphaNumeric(5),
      imgValue: this.generateRandomNum(2),
      description: "test"
    };
  }
}

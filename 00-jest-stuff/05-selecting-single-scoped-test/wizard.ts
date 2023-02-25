import { House } from "./house";

export class Wizard {
  constructor(public readonly name: string, public readonly house: House) {}

  changeHouse(newHouse: House): Wizard {
    return new Wizard(this.name, newHouse);
  }
}

export class House {
  static readonly Gryffindor = new House("Gryffindor");
  static readonly Hufflepuff = new House("Hufflepuff");
  static readonly Ravenclaw = new House("Ravenclaw");
  static readonly Slytherin = new House("Slytherin");

  constructor(public readonly name: string) {}
}

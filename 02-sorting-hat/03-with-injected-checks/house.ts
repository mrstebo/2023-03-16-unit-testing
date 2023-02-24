export class House {
  static readonly Gryffindor = new House("Gryffindor", [
    "bravery",
    "daring",
    "nerve",
    "chivalry",
  ]);
  static readonly Hufflepuff = new House("Hufflepuff", [
    "hard work",
    "patience",
    "justice",
    "loyalty",
  ]);
  static readonly Ravenclaw = new House("Ravenclaw", [
    "intelligence",
    "creativity",
    "learning",
    "wit",
  ]);
  static readonly Slytherin = new House("Slytherin", [
    "ambition",
    "cunning",
    "leadership",
    "resourcefulness",
  ]);

  static readonly All = [
    House.Gryffindor,
    House.Hufflepuff,
    House.Ravenclaw,
    House.Slytherin,
  ];

  constructor(
    public readonly name: string,
    public readonly desiredCharacteristics: string[]
  ) {}
}

import { GobletOfFire } from "./goblet-of-fire";

export class ImprovedGobletOfFire extends GobletOfFire {
  private readonly traits: string[] = [
    "Brave",
    "Stubborn",
    "Cunning",
    "Loyal",
    "Determined",
  ];

  public addName(name: string): void {
    const trait = this.traits[Math.floor(Math.random() * this.traits.length)];

    super.addName(`${name} the ${trait}`);
  }
}

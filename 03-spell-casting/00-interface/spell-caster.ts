import { Spell } from "./spells/spell";
import { Wizard } from "./wizard";

export class SpellCaster {
  constructor(private readonly wizard: Wizard, private readonly spell: Spell) {}

  async castSpell(): Promise<void> {
    // ...
  }
}

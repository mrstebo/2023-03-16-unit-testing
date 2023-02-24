import { Spell } from "./spells/spell";
import { Wizard } from "./wizard";

export class SpellCaster {
  constructor(private readonly wizard: Wizard, private readonly spell: Spell) {}

  async castSpell(): Promise<void> {
    if (this.wizard.level < this.spell.levelRequired) {
      throw new Error("Wizard is not powerful enough to cast this spell");
    }

    return await this.spell.cast();
  }
}

import { Spell } from "./spells/spell";
import { Wizard } from "./wizard";

export class SpellCaster {
  constructor(
    private readonly wizard: Wizard,
    private readonly spell: Spell,
    private readonly logger: (message: string) => void = console.log
  ) {}

  async castSpell(): Promise<void> {
    if (this.wizard.level < this.spell.levelRequired) {
      throw new Error("Wizard is not powerful enough to cast this spell");
    }

    this.logger(`Casting spell: ${this.spell.utterance}`);

    await this.spell.cast();

    this.logger(`Spell casted: ${this.spell.utterance}`);
  }
}

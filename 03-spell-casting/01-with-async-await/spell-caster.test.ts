import { SpellCaster } from "./spell-caster";
import { OculusRepairo } from "./spells/oculus-repario";
import { WingardiumLeviosa } from "./spells/wingardium-leviosa";
import { Wizard } from "./wizard";

describe("SpellCaster", () => {
  describe("castSpell", () => {
    it("should cast the spell if the wizard is powerful enough to cast the spell", async () => {
      const spell = new OculusRepairo();
      const wizard = new Wizard("Harry Potter", spell.levelRequired);

      const spellCaster = new SpellCaster(wizard, spell);

      await expect(spellCaster.castSpell()).resolves.toBeUndefined();
    });

    it("should throw an error if the wizard is not powerful enough to cast the spell", async () => {
      const spell = new WingardiumLeviosa();
      const wizard = new Wizard("Harry Potter", spell.levelRequired - 1);

      const spellCaster = new SpellCaster(wizard, spell);

      await expect(spellCaster.castSpell()).rejects.toThrow(
        "Wizard is not powerful enough to cast this spell"
      );
    });
  });
});

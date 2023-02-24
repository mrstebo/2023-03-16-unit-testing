import { SpellCaster } from "./spell-caster";
import { Wizard } from "./wizard";

describe("SpellCaster", () => {
  describe("castSpell", () => {
    it("should cast the spell if the wizard is powerful enough to cast the spell", async () => {
      const wizard = new Wizard("Harry Potter", 1);

      const spellCaster = new SpellCaster(wizard, {
        levelRequired: 1,
        utterance: "Oculus Repairo",
        cast: jest.fn().mockResolvedValue(undefined),
      });

      await expect(spellCaster.castSpell()).resolves.toBeUndefined();
    });

    it("should throw an error if the spell is not castable", async () => {
      const wizard = new Wizard("Harry Potter", 1);

      const spellCaster = new SpellCaster(wizard, {
        levelRequired: 1,
        utterance: "Oculus Repairo",
        cast: jest.fn().mockRejectedValue(new Error("Spell is not castable")),
      });

      await expect(spellCaster.castSpell()).rejects.toThrow(
        "Spell is not castable"
      );
    });

    it("should throw an error if the wizard is not powerful enough to cast the spell", async () => {
      const wizard = new Wizard("Harry Potter", 1);

      const spellCaster = new SpellCaster(wizard, {
        levelRequired: 2,
        utterance: "Oculus Repairo",
        cast: jest.fn().mockResolvedValue(undefined),
      });

      await expect(spellCaster.castSpell()).rejects.toThrow(
        "Wizard is not powerful enough to cast this spell"
      );
    });
  });
});

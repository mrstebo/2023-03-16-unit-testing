import { GobletOfFire } from "./goblet-of-fire";
import { RandomNumberGenerator } from "./random-number-generator";

jest.mock("./random-number-generator");

describe("GobletOfFire", () => {
  let rng: RandomNumberGenerator;
  let gobletOfFire: GobletOfFire;

  beforeEach(() => {
    rng = new RandomNumberGenerator();
    gobletOfFire = new GobletOfFire(rng);
  });

  it("should be able to be created", () => {
    expect(gobletOfFire).toBeTruthy();
  });

  describe("addName", () => {
    it("should not throw when adding a name to the list of names", () => {
      expect(() => gobletOfFire.addName("Harry Potter")).not.toThrow();
    });

    it("should not throw when adding multiple names to the list of names", () => {
      expect(() => {
        gobletOfFire.addName("Harry Potter");
        gobletOfFire.addName("Ron Weasley");
        gobletOfFire.addName("Hermione Granger");
      }).not.toThrow();
    });
  });

  describe("removeName", () => {
    it("should throw an error when removing a name from an empty list", () => {
      expect(() => gobletOfFire.removeName()).toThrowError();
    });

    it("should remove a name from a list of one name", () => {
      gobletOfFire.addName("Harry Potter");

      // No need to mock the return value of the generate method
      jest.mocked(rng.generate).mockClear();

      const result = gobletOfFire.removeName();

      expect(result).toBe("Harry Potter");
    });

    it("should remove a name from a list of multiple names", () => {
      gobletOfFire.addName("Harry Potter");
      gobletOfFire.addName("Ron Weasley");
      gobletOfFire.addName("Hermione Granger");

      jest.mocked(rng.generate).mockReturnValueOnce(1);

      const result = gobletOfFire.removeName();

      expect(result).toBe("Ron Weasley");
    });

    it("should be able to remove all names from the list", () => {
      gobletOfFire.addName("Harry Potter");
      gobletOfFire.addName("Ron Weasley");
      gobletOfFire.addName("Hermione Granger");

      jest
        .mocked(rng.generate)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0);

      const results = [
        gobletOfFire.removeName(),
        gobletOfFire.removeName(),
        gobletOfFire.removeName(),
      ];

      expect(results[0]).toBe("Ron Weasley");
      expect(results[1]).toBe("Harry Potter");
      expect(results[2]).toBe("Hermione Granger");
    });
  });
});

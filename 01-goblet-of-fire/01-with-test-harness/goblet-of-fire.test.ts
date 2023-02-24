import { GobletOfFire } from "./goblet-of-fire";

class TestableGobletOfFire extends GobletOfFire {
  public getNames(): string[] {
    return this.names;
  }
}

describe("GobletOfFire", () => {
  let gobletOfFire: TestableGobletOfFire;

  beforeEach(() => {
    gobletOfFire = new TestableGobletOfFire();
  });

  it("should be able to be created", () => {
    expect(gobletOfFire).toBeTruthy();
  });

  describe("addName", () => {
    it("should add a name to the list of names", () => {
      gobletOfFire.addName("Harry Potter");

      expect(gobletOfFire.getNames()).toContain("Harry Potter");
    });

    it("should add multiple names to the list of names", () => {
      gobletOfFire.addName("Harry Potter");
      gobletOfFire.addName("Ron Weasley");
      gobletOfFire.addName("Hermione Granger");

      expect(gobletOfFire.getNames()).toContain("Harry Potter");
      expect(gobletOfFire.getNames()).toContain("Ron Weasley");
      expect(gobletOfFire.getNames()).toContain("Hermione Granger");
    });
  });

  describe("removeName", () => {
    it("should throw an error if there are no names in the goblet", () => {
      expect(() => gobletOfFire.removeName()).toThrowError(
        "There are no names in the goblet"
      );
    });

    it("should return the name if there is only one name in the goblet", () => {
      gobletOfFire.addName("Harry Potter");

      const result = gobletOfFire.removeName();

      expect(result).toBe("Harry Potter");
    });

    it("should remove a name from the list of names", () => {
      gobletOfFire.addName("Harry Potter");
      gobletOfFire.addName("Ron Weasley");
      gobletOfFire.addName("Hermione Granger");

      const result = gobletOfFire.removeName();

      expect(gobletOfFire.getNames()).toHaveLength(2);
      expect(gobletOfFire.getNames()).not.toContain(result);
    });
  });
});

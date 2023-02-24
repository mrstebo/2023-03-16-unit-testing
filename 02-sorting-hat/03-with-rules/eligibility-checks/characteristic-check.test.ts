import { House } from "../house";
import { Student } from "../student";
import { CharacteristicsCheck } from "./characteristic-check";
import { EligibilityCheck } from "./eligibility-check";

describe("CharacteristicsCheck", () => {
  let eligibilityCheck: EligibilityCheck;

  beforeEach(() => {
    eligibilityCheck = new CharacteristicsCheck();
  });

  it("should be able to be created", () => {
    expect(eligibilityCheck).toBeTruthy();
  });

  describe("isEligible", () => {
    it("should return true if the student has all the desired characteristics", () => {
      const house = new House("Test House", ["test"]);
      const student = new Student("Random Student", ["test"]);

      const result = eligibilityCheck.isEligible(house, student);

      expect(result).toBe(true);
    });

    it("should return false if the student does not have all the desired characteristics", () => {
      const house = new House("Test House", ["test"]);
      const student = new Student("Random Student", ["not-test"]);

      const result = eligibilityCheck.isEligible(house, student);

      expect(result).toBe(false);
    });

    it("should return true if the student has all the desired characteristics, even if they have more", () => {
      const house = new House("Test House", ["test"]);
      const student = new Student("Random Student", ["test", "not-test"]);

      const result = eligibilityCheck.isEligible(house, student);

      expect(result).toBe(true);
    });
  });
});

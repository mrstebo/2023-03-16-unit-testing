import { EligibilityCheck } from "./eligibility-checks/eligibility-check";
import { House } from "./house";
import { SortingHat } from "./sorting-hat";
import { Student } from "./student";

describe("SortingHat", () => {
  let houses: House[];
  let eligibilityChecks: EligibilityCheck[];
  let sortingHat: SortingHat;

  beforeEach(() => {
    houses = [];
    eligibilityChecks = [];
    sortingHat = new SortingHat(houses, eligibilityChecks);
  });

  it("should be able to be created", () => {
    expect(sortingHat).toBeTruthy();
  });

  describe("placeOnHeadOf", () => {
    it("should sort the student into a house that matches their traits", () => {
      const house = new House("Test House", ["test"]);
      const student = new Student("Random Student", ["test"]);

      houses.push(house);
      eligibilityChecks.push({
        isEligible: () => true,
      });

      const result = sortingHat.placeOnHeadOf(student);

      expect(result).toBe(house);
    });

    it("should sort the student into the first house that matches their traits", () => {
      const house1 = new House("Test House 1", ["test"]);
      const house2 = new House("Test House 2", ["test"]);
      const student = new Student("Random Student", ["test"]);

      houses.push(house1);
      houses.push(house2);
      eligibilityChecks.push({
        isEligible: () => true,
      });

      const result = sortingHat.placeOnHeadOf(student);

      expect(result).toBe(house1);
    });

    it("should throw an error if the student is ineligible for any house", () => {
      const student = new Student("John Smith", ["evil"]);

      eligibilityChecks.push({
        isEligible: () => false,
      });

      expect(() => sortingHat.placeOnHeadOf(student)).toThrow(
        "Student is ineligible for any house"
      );
    });

    it("should return the first house if there are no eligibility checks", () => {
      const house1 = new House("Test House 1", ["test"]);
      const house2 = new House("Test House 2", ["test"]);

      houses.push(house1);
      houses.push(house2);

      const result = sortingHat.placeOnHeadOf(
        new Student("Random Student", [])
      );

      expect(result).toBe(house1);
    });
  });
});

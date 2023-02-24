import { House } from "./house";
import { SortingHat } from "./sorting-hat";
import { Student } from "./student";

describe("SortingHat", () => {
  let sortingHat: SortingHat;

  beforeEach(() => {
    sortingHat = new SortingHat();
  });

  it("should be able to be created", () => {
    expect(sortingHat).toBeTruthy();
  });

  describe("placeOnHeadOf", () => {
    it("should sort the student into Gryffindor house", () => {
      const student = new Student("Harry Potter", ["bravery"]);

      const result = sortingHat.placeOnHeadOf(student);

      expect(result).toBe(House.Gryffindor);
    });

    it("should sort the student into Hufflepuff house", () => {
      const student = new Student("Hermione Granger", ["hard work"]);

      const result = sortingHat.placeOnHeadOf(student);

      expect(result).toBe(House.Hufflepuff);
    });

    it("should sort the student into Ravenclaw house", () => {
      const student = new Student("Luna Lovegood", ["intelligence"]);

      const result = sortingHat.placeOnHeadOf(student);

      expect(result).toBe(House.Ravenclaw);
    });

    it("should sort the student into Slytherin house", () => {
      const student = new Student("Draco Malfoy", ["ambition"]);

      const result = sortingHat.placeOnHeadOf(student);

      expect(result).toBe(House.Slytherin);
    });

    it("should throw an error if the student is ineligible for any house", () => {
      const student = new Student("John Smith", ["evil"]);

      expect(() => sortingHat.placeOnHeadOf(student)).toThrow(
        "Student is ineligible for any house"
      );
    });
  });
});

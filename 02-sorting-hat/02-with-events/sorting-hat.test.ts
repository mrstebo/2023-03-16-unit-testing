import { House } from "../shared/house";
import { SortingHatEvents } from "../shared/sorting-hat-events";
import { Student } from "../shared/student";
import { SortingHat } from "./sorting-hat";

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
      const callback = jest.fn();

      sortingHat.on(SortingHatEvents.ALLOCATED_HOUSE, callback);

      sortingHat.placeOnHeadOf(student);

      expect(callback).toHaveBeenCalledWith({
        student,
        house: House.Gryffindor,
      });
    });

    it("should sort the student into Hufflepuff house", () => {
      const student = new Student("Hermione Granger", ["hard work"]);
      const callback = jest.fn();

      sortingHat.on(SortingHatEvents.ALLOCATED_HOUSE, callback);

      sortingHat.placeOnHeadOf(student);

      expect(callback).toHaveBeenCalledWith({
        student,
        house: House.Hufflepuff,
      });
    });

    it("should sort the student into Ravenclaw house", () => {
      const student = new Student("Luna Lovegood", ["intelligence"]);
      const callback = jest.fn();

      sortingHat.on(SortingHatEvents.ALLOCATED_HOUSE, callback);

      sortingHat.placeOnHeadOf(student);

      expect(callback).toHaveBeenCalledWith({
        student,
        house: House.Ravenclaw,
      });
    });

    it("should sort the student into Slytherin house", () => {
      const student = new Student("Draco Malfoy", ["ambition"]);
      const callback = jest.fn();

      sortingHat.on(SortingHatEvents.ALLOCATED_HOUSE, callback);

      sortingHat.placeOnHeadOf(student);

      expect(callback).toHaveBeenCalledWith({
        student,
        house: House.Slytherin,
      });
    });

    it("should not sort the student into a house", () => {
      const student = new Student("John Smith", ["evil"]);
      const callback = jest.fn();

      sortingHat.on(SortingHatEvents.FAILED_TO_ALLOCATE_HOUSE, callback);

      sortingHat.placeOnHeadOf(student);

      expect(callback).toHaveBeenCalledWith({
        student,
        reason: "Student is ineligible for any house",
      });
    });
  });
});

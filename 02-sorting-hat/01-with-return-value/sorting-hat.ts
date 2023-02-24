import { House } from "./house";
import { Student } from "./student";

export class SortingHat {
  /**
   * Trigger the sorting of a student by placing the hat on their head.
   *
   * @param student The student to sort
   * @returns The house the student has been allocated
   * @throws {Error} If the student is ineligible for any house
   */
  placeOnHeadOf(student: Student): House {
    return this.pickHouse(student);
  }

  /**
   * Attempts to pick a house for the student based on their characteristics
   *
   * @param student The student to pick a house for
   * @returns The house the student has been allocated
   * @throws {Error} If the student is ineligible for any house
   */
  private pickHouse(student: Student): House {
    if (student.characteristics.includes("bravery")) {
      return House.Gryffindor;
    }

    if (student.characteristics.includes("hard work")) {
      return House.Hufflepuff;
    }

    if (student.characteristics.includes("intelligence")) {
      return House.Ravenclaw;
    }

    if (student.characteristics.includes("ambition")) {
      return House.Slytherin;
    }

    throw new Error("Student is ineligible for any house");
  }
}

import { House } from "./house";
import { Student } from "./student";

/**
 * The Sorting Hat is a magical hat that can sort students into houses.
 */
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
    throw new Error("Not implemented");
  }
}

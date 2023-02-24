import { CharacteristicsCheck } from "./eligibility-checks/characteristic-check";
import { EligibilityCheck } from "./eligibility-checks/eligibility-check";
import { House } from "./house";
import { Student } from "./student";

export class SortingHat {
  constructor(
    private readonly houses: House[] = House.All,
    private readonly eligibilityChecks: EligibilityCheck[] = [
      new CharacteristicsCheck(),
    ]
  ) {}

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
   *
   */
  private pickHouse(student: Student): House {
    for (const house of this.houses) {
      if (this.isEligible(house, student)) {
        return house;
      }
    }

    throw new Error("Student is ineligible for any house");
  }

  /**
   * Checks if a student is eligible for a house based on the eligibility checks
   *
   * @param house The house to check eligibility for
   * @param student The student to check eligibility for
   * @returns True if the student is eligible for the house, false otherwise
   */
  private isEligible(house: House, student: Student): boolean {
    return this.eligibilityChecks.every((check) =>
      check.isEligible(house, student)
    );
  }
}

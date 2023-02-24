import { House } from "../house";
import { Student } from "../student";
import { EligibilityCheck } from "./eligibility-check";

export class CharacteristicsCheck implements EligibilityCheck {
  isEligible(house: House, student: Student): boolean {
    return house.desiredCharacteristics.some((characteristic) =>
      student.characteristics.includes(characteristic)
    );
  }
}

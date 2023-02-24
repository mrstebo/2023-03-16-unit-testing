import { House } from "../house";
import { Student } from "../student";

export interface EligibilityCheck {
  isEligible(house: House, student: Student): boolean;
}

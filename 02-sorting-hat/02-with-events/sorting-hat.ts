import { EventEmitter } from "stream";
import { House } from "./house";
import {
  AllocatedHouseEvent,
  FailedToAllocateHouseEvent,
  RemoveSortingHatEventListener,
  SortingHatEvent,
  SortingHatEvents,
} from "./sorting-hat-events";
import { Student } from "./student";

export class SortingHat {
  constructor(
    private readonly eventEmitter: EventEmitter = new EventEmitter()
  ) {}

  /**
   * Trigger the sorting of a student by placing the hat on their head.
   *
   * If the student is eligible for a house, the `onAllocatedHouseCallback` is called.
   *
   * If the student is ineligible for a house, the `onFailedToAllocateHouseCallback` is called.
   *
   * @param student The student to sort
   */
  placeOnHeadOf(student: Student): void {
    try {
      const house = this.pickHouse(student);

      this.eventEmitter.emit(SortingHatEvents.ALLOCATED_HOUSE, {
        student,
        house,
      } as AllocatedHouseEvent);
    } catch (error) {
      const { message } = error as Error;

      this.eventEmitter.emit(SortingHatEvents.FAILED_TO_ALLOCATE_HOUSE, {
        student,
        reason: message,
      } as FailedToAllocateHouseEvent);
    }
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

  /**
   * When a student is allocated a house, this callback is called
   *
   * @param callback The callback to call when a student is allocated a house
   */
  on(
    eventName: SortingHatEvents["ALLOCATED_HOUSE"],
    listener: (event: AllocatedHouseEvent) => void
  ): RemoveSortingHatEventListener<typeof eventName>;

  /**
   * When a student is ineligible for a house, this callback is called
   *
   * @param callback The callback to call when a student is ineligible for a house
   */
  on(
    eventName: SortingHatEvents["FAILED_TO_ALLOCATE_HOUSE"],
    listener: (event: FailedToAllocateHouseEvent) => void
  ): RemoveSortingHatEventListener<typeof eventName>;

  on(
    eventName: SortingHatEvents[keyof SortingHatEvents],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    listener: (event: SortingHatEvent<any>) => void
  ): RemoveSortingHatEventListener<typeof eventName> {
    this.eventEmitter.addListener(eventName, listener);

    return () => this.eventEmitter.removeListener(eventName, listener);
  }
}

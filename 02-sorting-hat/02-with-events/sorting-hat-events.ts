import { House } from "../shared/house";
import { Student } from "../shared/student";

const ALLOCATED_HOUSE = "sorting_hat.allocated_house";
const FAILED_TO_ALLOCATE_HOUSE = "sorting_hat.failed_to_allocate_house";

export const SortingHatEvents = {
  ALLOCATED_HOUSE,
  FAILED_TO_ALLOCATE_HOUSE,
} as const;

export type SortingHatEvents = {
  ALLOCATED_HOUSE: typeof ALLOCATED_HOUSE;
  FAILED_TO_ALLOCATE_HOUSE: typeof FAILED_TO_ALLOCATE_HOUSE;
};

export type SortingHatEvent<T> = T;

export type AllocatedHouseEvent = SortingHatEvent<{
  student: Student;
  house: House;
}>;

export type FailedToAllocateHouseEvent = SortingHatEvent<{
  student: Student;
  reason: string;
}>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type RemoveSortingHatEventListener<T> = () => void;

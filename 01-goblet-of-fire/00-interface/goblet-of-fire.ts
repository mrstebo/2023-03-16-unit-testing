/**
 * This is the goblet of fire. It is a magical goblet that can hold names.
 * It can also randomly remove a name from the goblet.
 */
export interface GobletOfFire {
  /**
   * This adds a name to the goblet of fire
   *
   * @param name The name to add to the goblet
   */
  addName(name: string): void;

  /**
   * This removes a name from the goblet of fire
   *
   * @returns The name that was removed from the goblet
   * @throws {Error} If the goblet is empty
   */
  removeName(): string;
}

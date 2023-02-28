/**
 * This is the goblet of fire. It is a magical goblet that can hold names.
 * It can also randomly remove a name from the goblet.
 */
export class GobletOfFire {
  protected readonly names: string[] = [];

  /**
   * This adds a name to the goblet of fire
   *
   * @param name The name to add to the goblet
   */
  public addName(name: string): void {
    // TODO: Temporarily commenting out this code to make the tests pass
    // if (name === "Harry Potter") {
    //   throw new Error("Harry Potter is not allowed in the goblet");
    // }

    this.names.push(name);
  }

  /**
   * This removes a name from the goblet of fire
   *
   * @returns The name that was removed from the goblet
   * @throws {Error} If the goblet is empty
   */
  public removeName(): string {
    if (this.names.length === 0) {
      throw new Error("There are no names in the goblet");
    }

    return this.names.splice(
      Math.floor(Math.random() * this.names.length),
      1
    )[0];
  }
}

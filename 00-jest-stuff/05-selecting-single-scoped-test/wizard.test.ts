import { House } from "./house";
import { Wizard } from "./wizard";

describe("Wizard", () => {
  let house: House;
  let wizard: Wizard;

  beforeEach(() => {
    house = new House("Gryffindor");
    wizard = new Wizard("Harry Potter", house);
  });

  // Only run this test
  it.only("wizard has a name", () => {
    expect(wizard?.name).toBe("Harry Potter");
  });

  // Skip this test
  it.skip("wizard has a house", () => {
    expect(wizard?.house).toBe(house);
  });

  // TODO: Write this test
  it.todo("wizard's house has a name");
});

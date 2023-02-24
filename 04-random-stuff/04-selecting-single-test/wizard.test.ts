import { House } from "./house";
import { Wizard } from "./wizard";

let house: House;
let wizard: Wizard;

beforeEach(() => {
  house = new House("Gryffindor");
  wizard = new Wizard("Harry Potter", house);
});

// Only run this test
test.only("wizard has a name", () => {
  expect(wizard?.name).toBe("Harry Potter");
});

// Skip this test
test.skip("wizard has a house", () => {
  expect(wizard?.house).toBe(house);
});

// TODO: Write this test
test.todo("wizard's house has a name");

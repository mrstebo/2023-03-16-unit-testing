import { House } from "./house";
import { Wizard } from "./wizard";

let house: House | null;
let wizard: Wizard | null;

beforeEach(() => {
  house = new House("Gryffindor");
  wizard = new Wizard("Harry Potter", house);
});

afterEach(() => {
  house = null;
  wizard = null;
});

test("wizard has a name", () => {
  expect(wizard?.name).toBe("Harry Potter");
});

test("wizard has a house", () => {
  expect(wizard?.house).toBe(house);
});

test("wizard's house has a name", () => {
  expect(wizard?.house.name).toBe("Gryffindor");
});

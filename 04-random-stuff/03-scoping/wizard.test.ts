import { House } from "./house";
import { Wizard } from "./wizard";

let house: House;
let wizard: Wizard;

beforeEach(() => {
  house = new House("Gryffindor");
  wizard = new Wizard("Harry Potter", house);
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

describe("wizard wants to change their name", () => {
  beforeEach(() => {
    wizard = wizard?.changeHouse(new House("Slytherin"));
  });

  test("wizard has a name", () => {
    expect(wizard?.name).toBe("Harry Potter");
  });

  test("wizard has changed house", () => {
    expect(wizard?.house).not.toBe(house);
  });

  test("wizard's house has a name", () => {
    expect(wizard?.house.name).toBe("Slytherin");
  });
});

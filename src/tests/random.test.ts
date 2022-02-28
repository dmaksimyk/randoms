import { random } from "../index";

describe("random", () => {
  it("number", () => {
    expect(typeof random(123)).toBe("number");
  })
  
  it("numbers", () => {
    expect(typeof random(123, 1234)).toBe("number");
  })
}) 
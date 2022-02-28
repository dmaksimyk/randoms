import { rand, random } from "../index";

describe("random", () => {
  it("number", () => {
    expect(typeof random(123)).toBe("number");
  })
  
  it("numbers", () => {
    expect(typeof rand(123, 1234)).toBe("number");
  })

  it("error", () => {
    expect(typeof random(0)).toThrow();
  })
}) 
import random from "../index";

describe("random", () => {
  it("number", () => {
    expect(typeof random.random(123)).toBe("number");
  })
  
  it("numbers", () => {
    expect(typeof random.rand(123, 1234)).toBe("number");
  })

  it("error", () => {
    expect(typeof random.random(0)).toThrow();
  })
}) 
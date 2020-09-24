import sum from "../utils/sum";

describe("addition function", () => {
  test("should add two numbers", () => {
    expect(sum(1, 3)).toEqual(4);
  });
});

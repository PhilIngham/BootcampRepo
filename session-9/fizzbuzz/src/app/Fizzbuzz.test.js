import { fizzbuzz } from "./Fizzbuzz";

describe("Fizzbuzz", () => {
  it("Should return fizz for a multiple of three", () => {
    const number = 3;
    const expectedOutput = "fizz";

    const result = fizzbuzz(number);

    expect(result).toBe(expectedOutput);
  });

  it("Should return buzz for a multiple of five", () => {
    const number = 5;
    const expectedOutput = "buzz";

    const result = fizzbuzz(number);

    expect(result).toBe(expectedOutput);
  });
  it("Should return fizzbuzz for a multiple of three and five", () => {
    const number = 15;
    const expectedOutput = "fizzbuzz";

    const result = fizzbuzz(number);

    expect(result).toBe(expectedOutput);
  });
});

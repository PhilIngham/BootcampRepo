import { fizzbuzz } from "./Fizzbuzz";

describe("Fizzbuzz", () => {
  it.skip("Should go through the for loop", () => {
    expect(fizzbuzz()).toBe("1, 2, 3, 4, 5, 6, 7, 8, 9, ");
  }); // This is functional

  it.skip("Should return fizz when it is a multiple of 3", () => {
    expect(fizzbuzz()).toBe("1, 2, fizz, 4, 5, fizz, 7, 8, fizz, ");
  }); // This is functional

  it.skip("Should replace all the multiples of five with buzz", () => {
    expect(fizzbuzz()).toBe("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, ");
  }); // This is functional

  it.skip("Should return fizzbuzz when value is a multiple of 3 & 5", () => {
    expect(fizzbuzz()).toBe(
      "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, "
    );
  }); // This is functional

  it("Should remove the ', ' from the end", () => {
    expect(fizzbuzz()).toBe(
      "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19"
    );
  }); // This is functional
});

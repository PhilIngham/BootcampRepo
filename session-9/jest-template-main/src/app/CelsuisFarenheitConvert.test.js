import {
  celsiusToFarenheit,
  farenheitToCelsius,
} from "./CelsuisFarenheitConvert";

// Tests:
/* 
Input
 - must be a number
 - not above three digits, not below kelvin
 
 Calculation 
  
 */

// * Celsius to Farenheit Conversion

describe("Celsius to Farenheit Conversion", () => {
  it("Should throw an error when input contains anything that isn't a number", () => {
    const temperature = "AAAAAAA";
    expect(() => celsiusToFarenheit(temperature)).toThrow();
  });

  it("Should return 32 if the celsius is zero", () => {
    const temperature = 0;
    expect(celsiusToFarenheit(temperature)).toBe(32);
  });

  it("Should return correct value for conversion", () => {
    const temperature = 28;
    expect(celsiusToFarenheit(temperature)).toBe(82.4);
  });

  it("Should throw an error when input is more than three digits", () => {
    const temperature = 99999;
    expect(() => celsiusToFarenheit(temperature)).toThrow();
  });
});

// ? Farenheit to Celsius Conversion

describe.skip("Farenheit to celsius", () => {
  it("Should throw error if not a number", () => {
    const temp = "absd";
    expect(() => farenheitToCelsius(temp)).toThrow();
  });

  it("Should return 0 is farenheit is = 32", () => {
    const temp = 32;
    expect(farenheitToCelsius(temp)).toBe(0);
  });

  it("Should return correct conversion value", () => {
    const temp = 5;
    expect(farenheitToCelsius(temp)).toBe(-15);
  });

  it("Should throw an error when input is > 3 digits", () => {
    const temp = 55555555;
    expect(() => farenheitToCelsius(temp)).toThrow();
  });
});

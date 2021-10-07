// Celcius to Farenheit -> C * 9/5 + 32
// Farenheit to Celsius -> F - 32 * 5/9
// const temperatureValue = document.getElementById("temperatureValue");
// const convertTo = document.getElementById("convert-to");
// const submit = document.getElementById("submit-btn");

export const celsiusToFarenheit = (temperature) => {
  const CELS_ABSOLUTE_ZERO = -273;

  if (typeof temperature !== "number") {
    throw new Error("Only numbers are allowed");
  } else if (temperature.toString().length > 4) {
    throw new Error("No numbers longer than three digits");
  } else if (temperature === 0) {
    temperature = 32;
  } else {
    temperature = temperature * (9 / 5) + 32;
  }
  return temperature;
};

// ------------------------------------------------------------------

export const farenheitToCelsius = (temperature) => {
  const absoluteZeroFarenheit = -459;

  if (typeof temperature !== "number") {
    throw new Error("Please enter a valid value");
  } else if (temperature.toString().length > 4) {
    throw new Error("Longer than 3 digits");
  } else if (temperature === 32) {
    temperature = 0;
  } else {
    temperature = ((temperature - 32) * 5) / 9;
  }
  return temperature;
};

export const dynamicInput = (input) => {};

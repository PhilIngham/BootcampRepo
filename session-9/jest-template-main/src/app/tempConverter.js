import TemperatureConverter from "./TemperatureClass.js";

const submitBtn = document.getElementById("submit-btn");

const dynamicInput = (event) => {
  const valueInput = document.getElementById("temp-value").value;
  console.log(valueInput);
  const tempType = document.getElementById("convert-to").value;
  console.log("TempType: ", tempType);

  let temperature = new TemperatureConverter(valueInput, tempType);

  let cValue;
  let fValue;
  let kValue;

  switch (tempType) {
    case "C":
      cValue = valueInput;
      fValue = temperature.celsiusToFarenheit();
      kValue = temperature.celsiusToKelvin();
      break;
    case "F":
      cValue = temperature.farenheitToCelsius();
      fValue = valueInput;
      kValue = temperature.farenheitToKelvin();
      break;
    case "K":
      cValue = temperature.kelvinToCelsius();
      fValue = temperature.kelvinToFarenheit();
      kValue = valueInput;
      break;
  }

  return {
    cValue: cValue,
    fValue: fValue,
    kValue: kValue,
  };
};

submitBtn.addEventListener("click", function () {
  const calculation = dynamicInput();
  const { cValue, fValue, kValue } = calculation;
  const outputTemp = document.getElementById("outputTemp");
  outputTemp.innerHTML = `${cValue}C 
   ${fValue}F 
   ${kValue}K`;
});

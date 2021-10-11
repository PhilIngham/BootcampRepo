export default class TemperatureConverter {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }

  getType() {
    return this.type;
  }
  setType(type) {
    this.type = type;
  }
  celsiusToFarenheit() {
    if (this.value === "") {
      throw new Error("Please enter a number");
    } else if (this.value === 0) {
      this.value = 32;
    } else {
      this.value = this.value * (9 / 5) + 32;
    }
    return this.value;
  }

  celsiusToKelvin() {
    if (this.value === "") {
      throw new Error("Please enter a number");
    } else if (this.value < -273.15) {
      throw new Error("Please enter a number above -273.15");
    } else {
      this.value += 273.15;
    }
    return this.value;
  }

  farenheitToCelsius() {
    if (this.value === "") {
      throw new Error("Please enter a number");
    } else if (this.value === 32) {
      this.value = 0;
    } else {
      this.value = ((this.value - 32) * 5) / 9;
    }
    return this.value;
  }

  farenheitToKelvin() {
    if (this.value === "") {
      throw new Error("Please enter a number");
    }
    this.value = (this.value - 32) / 1.8 + 273.15;
    return this.value;
  }

  kelvinToCelsius() {
    if (this.value === "") {
      throw new Error("Please enter a number");
    } else if (this.value < 0) {
      throw new Error("Please enter a number above -273.15");
    } else {
      this.value -= 273.15;
    }
    return this.value;
  }

  kelvinToFarenheit() {
    if (this.value === "") {
      throw new Error("Please enter a number");
    }
    this.value = (this.value - 273.15) * 1.8 + 32;
    return this.value;
  }
}

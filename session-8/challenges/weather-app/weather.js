const weatherAPIKey = ``;
const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}`;

// DOM Elements:
const weatherResult = document.querySelector(".weather-result");
const temperatureHeading = document.getElementById("temperature");
const locationNameHeading = document.getElementById("locationName");

const submitBtn = document.querySelector(".submit-btn");
const submit = document.getElementById("submit");
console.log("click");

const getWeather = async (event) => {
  event.preventDefault();

  const placeNameField = document.getElementById("placeid");

  const requestUrl = `${weatherAPIUrl}&q=${placeNameField.value}&api=no`;

  try {
    const response = await fetch(requestUrl);
    const {
      location: { name },
      current: {
        temp_c,
        condition: { icon },
      },
    } = await response.json();

    temperatureHeading.innerHTML = `${temp_c} &deg;C`;
    locationNameHeading.innerHTML = name;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = icon;

    weatherResult.appendChild(weatherIcon);
    placeNameField.value = "";
  } catch (err) {
    console.error(err);
  }
};

submitBtn.addEventListener("click", getWeather);

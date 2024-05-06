// const { userInfo } = require("os");

const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const useCnainer = document.getSelection(".weather-container");
const grantAccessContainer = document.querySelector(
  ".grant-location-container"
);
const seachForm = document.querySelector("[data-seachForm]");
const loadingSreen = document.querySelector(".loading-container");
const useInfoContainer = document.querySelector(".user-info-container");
const grantAccessButton = document.querySelector("[data-grantAccess]");

// inintially variale need
let currTab = userTab;
const API_KEY = "168771779c71f3d64106d8a88376808a";
currTab.classList.add("current-tab");
getfromSessionStorage();

//FIXME:
function swichTab(clickedTab) {
  if (clickedTab != currTab) {
    currTab.classList.remove("current-tab");
    currTab = clickedTab;
    currTab.classList.add("current-tab");
    if (!seachForm.classList.contains("active")) {
      useInfoContainer.classList.remove("active");
      grantAccessContainer.classList.remove("active");
      seachForm.classList.add("active");
    } else {
      seachForm.classList.remove("active");
      useInfoContainer.classList.remove("active");
      getfromSessionStorage();
    }
  }
}
//TODO:
userTab.addEventListener("click", () => {
  swichTab(userTab);
});
searchTab.addEventListener("click", () => {
  swichTab(searchTab);
});
// checking already coordinate extit or not
function getfromSessionStorage() {
  const localCoordinate = sessionStorage.getItem("user-coordinate");
  if (!localCoordinate) {
    // if local storage not found
    grantAccessContainer.classList.remove("active");
  } else {
    const coordinate = JSON.parse(localCoordinate);
    fetchUserWeatherInfo(coordinate);
  }
}
async function fetchUserWeatherInfo() {
  const { lat, lon } = coordinate;

  // make grand class invisible
  grantAccessContainer.classList.remove("active");
  // make loader visible
  loadingSreen.classList.add("active");
  // api call
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    loadingSreen.classList.remove("active");
    useInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    loadingSreen.classList.remove("active");
    // practice
  }
}
function renderWeatherInfo(weatherInfo) {
  const cityName = document.querySelector("[data-cityName]");
  const countryFlag = document.querySelector("[data-countryIcon]");
  const description = document.querySelector("[data-weatherdesc]");
  const weatherIcon = document.querySelector("[data-weatherIcon]");
  const temp = document.querySelector("[data-temp]");
  const windspeed = document.querySelector("[data-windSpeed]");
  const humidity = document.querySelector("[data-humidity]");
  const clouds = document.querySelector("[data-cloudiness]");
  cityName.innerText = weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
  description.innerText = weatherInfo?.weather?.[0]?.description;
  weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp.toFixed(2)} °C`;
  windspeed.innerText = `${weatherInfo?.wind?.speed.toFixed(2)} m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity.toFixed(2)} %`;
  clouds.innerText = `${weatherInfo?.clouds?.all.toFixed(2)} %`;
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // practice
  }
}
function showPosition(position) {
  const userCoordinates = {
    lat: position.coods.latitude,
    lon: position.coods.longitude,
  };
  sessionStorage.setItem("user-coordinate".json.stringify(userCoordinates));
  fetchUserWeatherInfo(userCoordinates);
}

grantAccessButton.addEventListener("click", getLocation);
const searchInput = document.querySelector("[data-searchInput]");
seachForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = searchInput.ariaValueMax;
  if (cityName === "") {
    return;
  } else {
    fetchSearchWeatherInfo(cityName);
  }
});
async function fetchSearchWeatherInfo(city) {
  loadingSreen.classList.add("active");
  useInfoContainer.classList.remove("active");
  grantAccessContainer.classList.remove("active");
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    loadingSreen.classList.remove("active");
    useInfoContainer.classList.add("active");
    renderWeatherInfo(data);
  } catch (error) {
    loadingSreen.classList.remove("active");
    // practice
  }
}

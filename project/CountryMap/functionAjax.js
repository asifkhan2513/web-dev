"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const languages = data.languages?.length
    ? data.languages.map((language) => language)
    : Object.values(data.languages)?.map((language) => language) || ["N/A"];
  const currency =
    data.currencies?.[Object.keys(data.currencies)?.[0]].name ?? "N/A";
  const nieghbour = data.borders?.length
    ? data.borders.map((border) => border)
    : Object.values(data.borders)?.map((border) => border) || ["N/A"];
  if (!nieghbour) return;
  const html = `
  
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region"></h4>
      <p class="country__row"><span>👫${(data.population / 10000000).toFixed(
        1
      )} M People</span></p>
      <p class="country__row"><span>🗣️  ${languages}</span></p>
      <p class="country__row"><span>💰 ${currency}</span></p>
    </div>
  </article>
  
`;

  console.log(nieghbour);
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNieghbour = function (country) {
  const request = new XMLHttpRequest();
  // ajax call 1
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`, true);
  request.send();
  // console.log(request);
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    // render country 1
    renderCountry(data);
    //get nighbour country
    // ajax call 2
    request.open("GET", `https://restcountries.com/v3.1/alpha/{code}`, true);
    request.send();
  });
};
getCountryAndNieghbour("bharat");
getCountryAndNieghbour("usa");
// getCountryAndNieghbour("russia");
// getCountryAndNieghbour("pakistan");
getCountryAndNieghbour("uae");
// getCountryAndNieghbour("saudiarab");

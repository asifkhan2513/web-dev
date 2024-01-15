"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`, true);
  request.send();
  // console.log(request);
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(request.responseText);
    const languages = data.languages?.length
      ? data.languages.map((language) => language)
      : Object.values(data.languages)?.map((language) => language) || ["N/A"]; // fetching languages

    const currency =
      data.currencies?.[Object.keys(data.currencies)?.[0]].name ?? "N/A"; //fetching currency

    console.log(data); // fetching data from API
    console.log(data.flags.png); // printing flag url
    console.log(data.name.common); // printing country name

    const html = `
  
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region"></h4>
            <p class="country__row"><span>👫${(
              data.population / 10000000
            ).toFixed(1)} M People</span></p>
            <p class="country__row"><span>🗣️  ${languages}</span></p>
            <p class="country__row"><span>💰 ${currency}</span></p>
          </div>
        </article>
`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData("bharat");
getCountryData("usa");
getCountryData("korea");
getCountryData("ukrain");

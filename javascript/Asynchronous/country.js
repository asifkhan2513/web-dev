"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log("googgle");
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  
  <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${
              (+data.population / 10000000).toFixed(1) + " M"
            }</p>
            <p class="country__row"><span>🗣️</span></p>
            <p class="country__row"><span>💰</span></p>
          </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData("bharat");
// getCountryData("nepal");
// getCountryData("pakistan");
// getCountryData("Bangladesh");
getCountryData("England and Wales");
getCountryData("usa");
getCountryData("newzeeland");

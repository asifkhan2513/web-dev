"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const getCountryData = function (country) {
  console.log("calling func wiht", country);
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("loadstart", function () {
    // console.log(this.responseText);
    console.log("reached here....");
    const [data] = JSON.parse(this.responseText);
    console.log("Api response =>", data);

    const html = `
  <article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.papulation / 100000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
`;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData("india");

getCountryData("usa");














// // Create a new XMLHttpRequest object
// var xhr = new XMLHttpRequest();

// // Define the API endpoint URL
// var apiUrl = "https://dummyapi.com/api/";

// // Configure the GET request
// xhr.open("GET", apiUrl, true);

// // Set up an event handler for when the request is complete
// xhr.onload = function () {
//   // Check if the request was successful (status code 200)
//   if (xhr.status === 200) {
//     // Parse the JSON response
//     var jsonResponse = JSON.parse(xhr.responseText);

//     // Handle the response data
//     console.log("Response from the API:", jsonResponse);

//     // You can perform further actions with the jsonResponse here
//   } else {
//     // Handle errors (e.g., display an error message)
//     console.error("Error occurred:", xhr.status, xhr.statusText);
//   }
// };

// // Set up an event handler for network errors
// xhr.onerror = function () {
//   console.error("Network error occurred");
// };

// // Send the GET request
// xhr.send();

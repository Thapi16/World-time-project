let RandburgElement = document.querySelector("#Randburg");
if (RandburgElement) {
  let RandburgDateElement = RandburgElement.querySelector(".date");
  let RandburgTimeElement = RandburgElement.querySelector(".time");
  let RandburgTime = moment().tz("Africa/Johannesburg");

  RandburgDateElement.innerHTML = RandburgTime.format("MMMM	Do YYYY");
  RandburgElement.innerHTML = RandburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

// Moretele
let MoreteleElement = document.querySelector("#Moretele");
if (MoreteleElement) {
  let MoreteleDateElement = MoreteleElement.querySelector(".date");
  let MoreteleTimeElement = MoreteleElement.querySelector(".time");
  let MoreteleTime = moment().tz("Africa/Johannesburg");

  MoreteleDateElement.innerHTML = MoreteleTime.format("MMMM	Do YYYY");
  MoreteleTimeElement.innerHTML = MoreteleTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

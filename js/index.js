function updateTime() {
  //Randburg
  let randburgElement = document.querySelector("#randburg");
  if (randburgElement) {
    let randburgDateElement = randburgElement.querySelector(".date");
    let randburgTimeElement = randburgElement.querySelector(".time");
    let randburgTime = moment().tz("Africa/Johannesburg");

    randburgDateElement.innerHTML = randburgTime.format("MMMM	Do YYYY");
    randburgTimeElement.innerHTML = randburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Moretele
  let moreteleElement = document.querySelector("#moretele");
  if (moreteleElement) {
    let moreteleDateElement = moreteleElement.querySelector(".date");
    let moreteleTimeElement = moreteleElement.querySelector(".time");
    let moreteleTime = moment().tz("Africa/Johannesburg");

    moreteleDateElement.innerHTML = moreteleTime.format("MMMM	Do YYYY");
    moreteleTimeElement.innerHTML = moreteleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
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

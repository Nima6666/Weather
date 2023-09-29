import thermometerImg from "../assets/thermometer.png";
import rainImg from "../assets/rain.png";
import humidityImg from "../assets/humidity.png";
import visibilityImg from "../assets/visibility.png";
import windImg from "../assets/wind.png";

function updateTime(date) {
  console.log(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "march",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December.",
  ];

  const dateRaw = date.split(" ")[0];
  const timeStr = date.split(" ")[1];

  const dateData = new Date(dateRaw);
  const dayOfWeek = daysOfWeek[dateData.getDay()];
  const monthOfYear = monthsOfYear[dateData.getMonth()];
  console.log(monthOfYear);

  const year = dateRaw.split("-")[0];
  const tarik = dateRaw.split("-")[1];

  const [hour, minute] = timeStr.split(":");

  const formattedHour = hour % 12 || 12;

  const ampm = hour > 12 ? "PM" : "AM";
  const timeNow = `${formattedHour}:${minute} ${ampm}`;

  return {
    timeNow,
    year,
    tarik,
    monthOfYear,
    dayOfWeek,
  };
}
let html = "";

// eslint-disable-next-line consistent-return
function recursiveUpdateHour(weather, currentHour, num) {
  if (num === 0) {
    console.log(html);
    return html;
  }

  if (currentHour < 24) {
    html += weather[0].hour[currentHour + 1].temp_c;

    recursiveUpdateHour(weather, currentHour + 1, num - 1);
  } else {
    html += weather[1].hour[0].temp_c;
    recursiveUpdateHour(weather, 0, num - 1);
  }
}

function updateForcast(weather) {
  console.log(weather);

  const forecast = document.querySelector("#forecastData");

  const hourForecast = document.createElement("div");
  hourForecast.id = "hourlyForecast";
  const currentHour = new Date().getHours();
  recursiveUpdateHour(weather, currentHour, 5);
  const dailyForecast = document.createElement("div");
  dailyForecast.id = "dailyForecast";

  forecast.textContent = "a";
}

export const getInfo = (() => {
  const locationTodayWeatherInfo = (currentWeather) => {
    const locationName = currentWeather.location.name;

    const locationCountry = currentWeather.location.country;

    const tempInDegC = `${currentWeather.current.temp_c}℃`;

    const tempInDegF = `${currentWeather.current.temp_f}°F`;

    const feelsLikeDegC = `${currentWeather.current.feelslike_c}℃`;

    const feelsLikeDegF = `${currentWeather.current.feelslike_f}°F`;

    const condition = currentWeather.current.condition.text;

    const visibility = `${currentWeather.current.vis_km} KM`;

    const humidityy = `${currentWeather.current.humidity}%`;

    const forcastToday = currentWeather.forecast.forecastday[0];

    const windSpeed = `${currentWeather.current.wind_kph} KM/PH`;

    const high = `${forcastToday.day.maxtemp_c} ℃`;

    const low = `${forcastToday.day.mintemp_c} ℃`;

    const chanceOfRain = `${forcastToday.day.daily_chance_of_rain}%`;

    return {
      locationName,
      locationCountry,
      tempInDegC,
      tempInDegF,
      feelsLikeDegC,
      feelsLikeDegF,
      condition,
      visibility,
      humidityy,
      windSpeed,
      chanceOfRain,
      high,
      low,
    };
  };

  return {
    locationTodayWeatherInfo,
  };
})();

// eslint-disable-next-line import/prefer-default-export
export const domMain = (() => {
  const body = document.querySelector("body");

  const updateCurrTime = (date) => {
    if (document.querySelector("#currentTime")) {
      document
        .querySelector("time")
        .removeChild(document.querySelector("#currentTime"));
    }

    const curTime = document.createElement("div");
    curTime.id = "currentTime";
    curTime.innerHTML = "";
    const dateInfo = updateTime(date);

    curTime.innerHTML = `
        <div id="year">
          ${dateInfo.year}
        </div>
        <div id="cdate">
          ${dateInfo.monthOfYear} ${dateInfo.tarik}
        </div>
        <div id="ttime">
          ${dateInfo.timeNow}
        </div>
      `;

    document.querySelector("#time").appendChild(curTime);
  };

  const display = (currentWeather) => {
    const content = document.createElement("div");
    content.classList.value = "content";
    content.innerHTML = "";

    console.log("update");

    const weather = getInfo.locationTodayWeatherInfo(currentWeather);

    content.innerHTML = `
        <div id="locationTime">
          <div class="location">
            ${currentWeather.location.name}, ${currentWeather.location.country}
          </div>
          <div id ="time"></div>
          <div class="temp">${weather.tempInDegC}</div>
          <div>High-Low: ${weather.high} - ${weather.low}</div>
        </div>
        <div id="today">
          <div class="celcius">
            <img src="${thermometerImg}">
            <div>
              <div class="title">
                Feels Like
              </div>
              <div>
                ${weather.feelsLikeDegC}
              </div>
            </div>
          </div>

          <div class="condition">
            <img src=${currentWeather.current.condition.icon}>
            <div>
              <div class="title">
                Condition
              </div>
              <div>
                ${weather.condition}
              </div>
            </div>
          </div>

          <div>
            <img src="${rainImg}">
            <div>
              <div class="title">
                Precipitation
              </div>
              <div>
                ${weather.chanceOfRain}
              </div>
            </div>
          </div>

          <div>
            <img src="${visibilityImg}">
            <div>
              <div class="title">
                Visibility
              </div>
              <div>
                ${weather.visibility}
              </div>
            </div>
          </div>
          <div>
            <img src="${humidityImg}">
            <div>
              <div class="title">
                Humidity
              </div>
              <div>
                ${weather.humidityy}
              </div>
            </div>
          </div>

          <div>
            <img src="${windImg}">
            <div>
              <div class="title">
                Wind Speed
              </div>
              <div>
                ${weather.windSpeed}
              </div>
            </div>
          </div>

        </div>
        <div id="forecastData">
        
        </div>
        <div class="sliderBox">
          <div id="box">
            <div id="slider"></div>
            <div id="txt">C</div>
          </div>
        </div>
      `;
    body.appendChild(content);
    updateCurrTime(currentWeather.location.localtime);
    updateForcast(currentWeather.forecast.forecastday);
  };

  return {
    display,
  };
})();

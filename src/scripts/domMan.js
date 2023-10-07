import thermometerImg from "../assets/thermometer.png";
import rainImg from "../assets/rain.png";
import humidityImg from "../assets/humidity.png";
import visibilityImg from "../assets/visibility.png";
import windImg from "../assets/wind.png";

function updateTime(date) {
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

  const year = dateRaw.split("-")[0];
  const tarik = dateRaw.split("-")[1];

  const [hour, minute] = timeStr.split(":");

  const formattedHour = hour % 12 || 12;

  const ampm = hour >= 12 ? "PM" : "AM";
  const timeNow = `${formattedHour}:${minute} ${ampm}`;

  return {
    timeNow,
    year,
    tarik,
    monthOfYear,
    dayOfWeek,
  };
}

// eslint-disable-next-line consistent-return
function recursiveUpdateHour(weather, currentHour, hours, count, index) {
  if (count < 0) {
    return;
  }

  if (currentHour > 23) {
    hours.push(weather[1].hour[index]);
    recursiveUpdateHour(weather, currentHour, hours, count - 1, index + 1);
  } else {
    hours.push(weather[0].hour[currentHour]);
    recursiveUpdateHour(weather, currentHour + 1, hours, count - 1, index);
  }
}

function updateForcast(weather) {
  const hours = [];

  const forecast = document.querySelector("#forecastData");

  const hourForecast = document.createElement("div");
  hourForecast.id = "hourlyForecast";
  const currentHour = new Date().getHours();
  recursiveUpdateHour(weather, currentHour, hours, 23, 0);
  forecast.appendChild(hourForecast);

  domMain.displayHouryForecast(hours);

  const dailyForecast = document.createElement("div");
  dailyForecast.id = "dailyForecast";
  forecast.appendChild(dailyForecast);

  domMain.displayDailyForecast(weather);
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
          ${dateInfo.monthOfYear} ${dateInfo.tarik} ${dateInfo.dayOfWeek}
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

  const displayHouryForecast = (hours) => {
    const hourForecast = document.querySelector("#hourlyForecast");
    let html = "";

    hours.forEach((hour) => {
      const [dishours, minute] = hour.time.split(" ")[1].split(":");

      let formattedHour = dishours % 12 || dishours;
      console.log(formattedHour);
      formattedHour = formattedHour == 0 ? 12 : formattedHour;
      const ampm = dishours >= 12 ? "pm" : "am";
      const displayTime = `${formattedHour}:${minute} ${ampm}`;

      html += `
              <div>
                <div class="forTime">${displayTime}</div>
                <div class="hour">
                  <img src=${hour.condition.icon}>
                  <div>${hour.temp_c} ℃</div>
                </div>
              </div>
      `;
    });

    hourForecast.innerHTML = html;
  };

  const displayDailyForecast = (weather) => {
    let html = "";

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const nDay = new Date().getDay();

    weather.forEach((day, index) => {
      html += `<div>
                <div class="day">${
                  daysOfWeek[nDay + index > 6 ? nDay + index - 7 : nDay + index]
                }</div>
                <div class="imm">
                  <div>
                    <div class="max">${day.day.maxtemp_c}℃</div>
                    <div class="min">${day.day.mintemp_c}℃</div> 
                  </div>
                  <img src=${day.day.condition.icon}>
                </div>
              </div>`;
    });

    document.querySelector("#dailyForecast").innerHTML = html;
  };

  return {
    display,
    displayHouryForecast,
    displayDailyForecast,
  };
})();
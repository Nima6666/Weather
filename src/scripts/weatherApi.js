// eslint-disable-next-line import/prefer-default-export
import { domMain } from "./domMan";

async function weatherApi(lat, log) {
  try {
    const weather = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4f780fb9d0a940998b1133518232609&q=${lat},${log}`,
      { mode: "cors" }
    );
    const currentWeather = await weather.json();
    console.log(currentWeather);
    domMain.display(currentWeather);
  } catch (err) {
    console.log(err);
  }
}
navigator.geolocation.getCurrentPosition((data) => {
  weatherApi(data.coords.latitude, data.coords.longitude);
});

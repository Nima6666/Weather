// eslint-disable-next-line import/prefer-default-export
import { domMain } from "./domMan";

async function weatherApi(lat, log) {
  try {
    const foreWeather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=4f780fb9d0a940998b1133518232609&q=${lat},${log}&days=7`
    );
    const forcastWeather = await foreWeather.json();
    console.log(forcastWeather);
    domMain.display(forcastWeather);
  } catch (err) {
    console.log(err);
  }
}
navigator.geolocation.getCurrentPosition((data) => {
  weatherApi(data.coords.latitude, data.coords.longitude);
});
// eslint-disable-next-line import/prefer-default-export
import { domMain } from "./domMan";

let forcastWeather;

// eslint-disable-next-line import/no-mutable-exports
export const saveWeather = () => forcastWeather;

async function weatherApi(latOrLocation, log) {
  let foreWeather;
  try {
    if (typeof latOrLocation === "number") {
      foreWeather = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=4f780fb9d0a940998b1133518232609&q=${latOrLocation},${log}&days=7`
      );
    } else {
      foreWeather = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=4f780fb9d0a940998b1133518232609&q=${latOrLocation}&days=7`
      );
    }
    document.querySelector("#content").innerHTML = "";
    forcastWeather = await foreWeather.json();
    domMain.display(forcastWeather);
  } catch (err) {
    alert(err);
  }
}
navigator.geolocation.getCurrentPosition((data) => {
  weatherApi(data.coords.latitude, data.coords.longitude);
});

export default weatherApi;

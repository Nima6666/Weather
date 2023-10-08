import loading from "../assets/loading.png";
import { domMain } from "./domMan";

const { default: weatherApi, saveWeather } = require("./weatherApi");

require("../style.css");
require("./weatherApi");

const buttonHandler = (() => {
  const loadingS = () => {
    document.querySelector("#content").innerHTML = `
            <div class="loading">
              <div class="fetching">Fetching Data...</div>
              <img id="loadingImg" src = ${loading} class="rotate">
            </div>
            `;
  };

  const submit = () => {
    const location = document.querySelector("#Slocation").value;
    weatherApi(location);
  };

  const changeTemp = () => {
    const content = document.querySelector(".content");
    if (!content) return;
    // eslint-disable-next-line no-unused-expressions
    domMain.getCurrTempScaleC() ? (content.id = "F") : (content.id = "C");
    domMain.changeCurrTempScale();
    if (content.id === "F") {
      document
        .querySelector("#slider")
        .setAttribute(
          "style",
          "position:absolute; transform: translateX(-36px)"
        );
      document.querySelector("#txt").textContent = "℃";
      document
        .querySelector("#box")
        .setAttribute("style", "background: rgb(216, 196, 105);");

      document.querySelector("#content").innerHTML = "";
      domMain.display(saveWeather());
    } else {
      document
        .querySelector("#slider")
        .setAttribute("style", " transform: translateX(0px)");
      document.querySelector("#txt").textContent = "°F";
      document
        .querySelector("#box")
        .setAttribute("style", "background: rgb(132, 172, 109);");
      document.querySelector("#content").innerHTML = "";
      domMain.display(saveWeather());
    }
  };

  return {
    loadingS,
    changeTemp,
    submit,
  };
})();

const form = document.querySelector("#loc");

const sliderBox = document.querySelector("#box");

form.addEventListener("submit", () => {
  buttonHandler.submit();
  buttonHandler.loadingS();
  form.reset();
});

sliderBox.addEventListener("click", () => {
  buttonHandler.changeTemp();
});

buttonHandler.loadingS();

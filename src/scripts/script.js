const { default: weatherApi } = require("./weatherApi");

require("../style.css");
require("./weatherApi");

const buttonHandler = (() => {
  const submitLocation = () => {
    const location = document.querySelector("#Slocation").value;
    document.querySelector("#content").innerHTML = "";
    weatherApi(location);
  };

  return {
    submitLocation,
  };
})();

const form = document.querySelector("#loc");

form.addEventListener("submit", () => {
  buttonHandler.submitLocation();
  form.reset();
});

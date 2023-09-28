// eslint-disable-next-line import/prefer-default-export
export const domMain = (() => {
  const body = document.querySelector("body");

  const display = (currentWeather) => {
    const content = document.createElement("div");

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dateStr = currentWeather.location.localtime.split(" ")[0];
    const timeStr = currentWeather.location.localtime.split(" ")[1];

    const date = new Date(dateStr);
    const dayOfWeek = daysOfWeek[date.getDay()];

    const [hour, minute] = timeStr.split(":");

    const formattedHour = hour % 12 || 12;

    const ampm = hour > 12 ? "PM" : "AM";

    console.log(dateStr, timeStr);

    content.innerHTML = `
        <div class='content'>
          <div class="locInfo">
            <div class="locTime">
              <div class="location">${currentWeather.location.name}, ${currentWeather.location.country}</div>
              <div class="time">${dateStr}, ${dayOfWeek} ${formattedHour}:${minute} ${ampm}. </div>
            </div>
            <div class="currWeather">
              <div id="deg">${currentWeather.current.temp_c}℃</div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
                    `;
    body.appendChild(content);
  };

  return {
    display,
  };
})();

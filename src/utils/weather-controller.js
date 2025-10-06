import fetchData from "../data/fetch-data";
import processJson from "../data/process-json";
import displayData from "../data/display-data";
import { modifyTempData } from "../data/modify-data";
import { toggleTemp, changeTempDisplay } from "./toggle-temperature-cycle";

export default function weatherController() {
  let temperatureScale;
  let toggleTempButton = false;
  let searchTerm;
  let weatherPromise;

  const form = document.getElementById("search-city-form");
  const searchInput = document.getElementById("search-bar");
  const tempButton = document.getElementById("tempBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    defaultTemperatureCycle(tempButton);

    toggleTempButton = true;
    searchTerm = searchInput.value.trim();
    weatherPromise = getProcessedData(searchTerm);
    displayData(weatherPromise);
  });

  tempButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (toggleTempButton === true) {
      displayData(modifyTempData(weatherPromise, temperatureScale));
      changeTempDisplay(tempButton, temperatureScale);
      temperatureScale = toggleTemp(temperatureScale);
    }
  });
  function defaultTemperatureCycle(btn) {
    temperatureScale = "fahrenheit";
    changeTempDisplay(btn, "celsius");
  }
}
function getProcessedData(location) {
  if (location) return processJson(fetchData(location), 0);
}

import processJson from "../data/process-json";
import fetchData from "../data/fetch-data";
import displayData from "../data/display-data"

export default function weatherController() {
  let weatherPromise;
  let searchTerm;

  const form = document.getElementById("search-city-form");
  const searchInput = document.getElementById("search-bar");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    searchTerm = searchInput.value.trim();
    weatherPromise = getProcessedData(searchTerm);
    displayData(weatherPromise);
  });
}
function getProcessedData(location) {
  if (location) return processJson(fetchData(location), 0);
}
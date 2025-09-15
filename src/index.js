import "./styles.css";
import fetchData from "./data/fetch-data";
import processJson from "./data/process-json";
import displayData from "./data/display-data";
import dropdown from "./utils/dropdown";

dropdown();

const form = document.getElementById("search-city-form");
const searchInput = document.getElementById("search-bar");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    displayData(processJson(fetchData(searchTerm), 0));
  }
});

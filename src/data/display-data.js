import { getWeatherIcon } from "./modify-data";

export async function displayData(weatherObjPromise) {
  const weatherObj = await weatherObjPromise;
  const allElements = document.querySelectorAll("[id]");

  allElements.forEach((element) => {
    const key = element.id;
    if (key in weatherObj) {
      element.textContent = weatherObj[key];
    }
  });
  const iconSrc = await getWeatherIcon(weatherObj);
  displayWeatherIcon(iconSrc);
}
export async function displayWeatherIcon(iconSrc) {
  document.querySelector(".weather-icon").src = iconSrc;
}

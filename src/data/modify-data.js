import { fahrenheitToCelsius } from "../utils/convert-temp";

export function modifyTempData(weatherPromise, tempScale) {
  return weatherPromise.then((weatherData) => {
    switch (tempScale) {
      case "fahrenheit":
        weatherData.temp = fahrenheitToCelsius(weatherData.temp);
        weatherData.tempMax = fahrenheitToCelsius(weatherData.tempMax);
        weatherData.tempMin = fahrenheitToCelsius(weatherData.tempMin);
        weatherData.feelsLikeTemp = fahrenheitToCelsius(
          weatherData.feelsLikeTemp,
        );
        break;
      case "celsius":
        break;
      default:
        console.log("Error with temperature scale inputted");
    }
    return weatherData;
  });
}

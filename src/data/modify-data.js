export function modifyTempData(weatherPromise, tempScale) {
  return weatherPromise.then((weatherData) => {
    switch(tempScale) {
        case "fahrenheit":
            break;
        case "celsius":
            break;
        default:
            console.log("Error with temperature scale inputted");
    }
    return weatherData;
  });
}

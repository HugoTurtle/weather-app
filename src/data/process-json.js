export default function processJson(promiseData, day) {
  return promiseData.then((data) => {
    const address = data.address;
    const temp = data.days[day].temp;
    const conditions = data.days[day].conditions;
    const tempMax = data.days[day].tempmax;
    const tempMin = data.days[day].tempmin;
    const feelsLikeTemp = data.days[day].feelslike;
    const uvIndex = data.days[day].uvindex;
    const sunriseTime = data.days[day].sunrise;
    const sunsetTime = data.days[day].sunset;
    const windSpeed = data.days[day].windspeed;
    const humidity = data.days[day].humidity;
    const precipitation = data.days[day].precip;
    const cloudCover = data.days[day].cloudcover;
    const windGust = data.days[day].windgust;

    return {
      address,
      temp,
      conditions,
      tempMax,
      tempMin,
      feelsLikeTemp,
      uvIndex,
      sunriseTime,
      sunsetTime,
      windSpeed,
      humidity,
      precipitation,
      cloudCover,
      windGust,
    };
  });
}

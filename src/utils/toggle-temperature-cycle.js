export function toggleTemp(temperatureScale) {
  return temperatureScale === "fahrenheit" ? "celsius" : "fahrenheit";
}
export function changeTempDisplay(btn, temperatureScale) {
  if (temperatureScale === "fahrenheit") {
    btn.textContent = "Fahrenheit";
  } else if (temperatureScale === "celsius") {
    btn.textContent = "Celsius";
  }
}

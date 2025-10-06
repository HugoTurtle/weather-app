function roundToHundredsValue(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
export function fahrenheitToCelsius(fahrenheit) {
  return roundToHundredsValue(((fahrenheit - 32) * 5) / 9);
}
export function celsiusToFahrenheit(celsius) {
  return roundToHundredsValue((celsius * 9) / 5 + 32);
}

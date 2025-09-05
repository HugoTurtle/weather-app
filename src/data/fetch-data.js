export default async function fetchData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=96QU7AHGNAX33HEE9XKBN7279`,
    { mode: "cors" },
  );
  const data = await response.json();
  return data;
}

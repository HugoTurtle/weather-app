export default async function fetchData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=96QU7AHGNAX33HEE9XKBN7279`,
      { mode: "cors" },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

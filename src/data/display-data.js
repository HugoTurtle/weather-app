export default async function displayData(weatherObjPromise) {
  const weatherObj = await weatherObjPromise;
  const allElements = document.querySelectorAll("[id]");

  allElements.forEach((element) => {
    const key = element.id;
    if (key in weatherObj) {
      element.textContent = weatherObj[key];
    }
  });
}

let place = document.querySelector(".place");
let temp = document.querySelector(".temp");
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  } else {
    place.innerHTML = "GeoLocation is not supported by your browser";
  }
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordinates = `${latitude},${longitude}`;
    getWeather(coordinates);
  }
  function error() {
    alert("Couldn't find the location");
  }
});
let BASE_URL = "https://api.weatherapi.com/v1/current.json?key=";
let KEY = "8e948b7faaa64e83bd7101704251806";
const getWeather = async (coordinates) => {
  const URL = `${BASE_URL}${KEY}&q=${coordinates}`;
  let res = await fetch(URL);
  let data = await res.json();
  console.log(data);
  place.innerHTML = data.location.name;
  temp.innerHTML = data.current.temp_c;
};

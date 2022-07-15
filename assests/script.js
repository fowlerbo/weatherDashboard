var buttonEl = document.getElementById("searchbutton");
var input = document.getElementById("search-city");
function searchcity(city) {
  var apiKey = "a53b263fd5fb250576a1fa55d6798ef5";
  var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;
  console.log(apiUrl);
}

buttonEl.addEventListener("click", function () {
  var city = input.value;
  searchcity(city);
});

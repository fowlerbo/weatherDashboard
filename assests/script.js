var buttonEl = document.getElementById("searchbutton");
var input = document.getElementById("search-city");

buttonEl.addEventListener("click", function () {
  var city = input.value;
  searchcity(city);
});

function preloadLocationValue() {
  let locationField = document.getElementById("location-input");
  let preloadValue = localStorage.searchInput;
  locationField.value = preloadValue;
}

window.onload = preloadLocationValue;

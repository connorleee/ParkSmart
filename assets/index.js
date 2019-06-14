function preloadLocationValue() {
    var locationField = document.getElementById('location-input');
    var preloadValue = localStorage["searchInput"];
	locationField.value = preloadValue;
}

window.onload = preloadLocationValue;
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/Parkings/"
  }).then(function(response) {
    console.log("got here");

    function initMap() {
      var center = {
        lat: 34.052235,
        lng: -118.243683
      };
      var locations = [];
      for (let i = 0; i < response.length; i++) {
        locations.push([response[i][1], response[i][2]]);
      }
      console.log(locations);
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: center
      });
      var infowindow = new google.maps.InfoWindow({});
      var marker, count;
      for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            locations[count][1],
            locations[count][2]
          ),
          map: map,
          title: locations[count][0]
        });
        google.maps.event.addListener(
          marker,
          "click",
          (function(marker, count) {
            return function() {
              infowindow.setContent(locations[count][0]);
              infowindow.open(map, marker);
            };
          })(marker, count)
        );
      }
    }

    initMap();
  });
});

function preloadLocationValue() {
  //load the city and state name from local storage to location box
  var locationField = document.getElementById("location-input");
  var preloadValue = localStorage.city;

  locationField.value = preloadValue + ", " + localStorage.state;

  //load the street number, street name, city, state and zip code from local storage to the form area

  document.getElementById("form_address").value =
    localStorage.street_number + " " + localStorage.street_name;

  document.getElementById("form_city").value = localStorage.city;

  document.getElementById("form_state").value = localStorage.state;

  document.getElementById("zip-code").value = localStorage.zip_code;
}

window.onload = preloadLocationValue;
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.6062, lng: -122.3321 },
    zoom: 13,
    mapTypeId: "roadmap"
  });

  // Create the search box and link it to the UI element.
  let input = document.getElementById("pac-input");
  let searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", function() {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", function() {
    let places = searchBox.getPlaces();

    if (places.length === 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    let bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      let icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        })
      );

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

initAutocomplete();

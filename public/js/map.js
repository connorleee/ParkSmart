$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/Parkings/"
  }).then(function(response) {
    console.log(response);
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

// eslint-disable-next-line no-unused-vars
function initMap() {
  $.ajax({
    method: "GET",
    url: "/api/Parkings/"
  }).then(function(response) {
    console.log("ajax response: ");
    console.log(response);
    var locations = [];
    for (let i = 0; i < response.length; i++) {
      locations.push([response[i][0], response[i][1], response[i][2]]);
    }
    console.log("Locations: ");
    console.log(locations);
    var center = {
      lat: 47.610112,
      lng: -122.324838
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: center
    });
    var marker, count;
    for (count = 0; count < locations.length; count++) {
      var contentString = `<div id='content'>${placeholder}</div>`;

      var infowindow = new google.maps.InfoWindow({ content: contentString });
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          locations[count][0],
          locations[count][1]
        ),
        map: map,
        title: locations[count][2]
      });
      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, count) {
          return function() {
            infowindow.setContent(locations[count][2]);
            infowindow.open(map, marker);
          };
        })(marker, count)
      );
    }
  });
}

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

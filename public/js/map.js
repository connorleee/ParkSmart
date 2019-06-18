/* eslint-disable prettier/prettier */
function preloadLocationValue() {
  //load the city and state name from local storage to location box
  var locationField = document.getElementById("location-input");
  var preloadValue = localStorage["user-input"];

  locationField.value = preloadValue + localStorage.state;

  //load the street number, street name, city, state and zip code from local storage to the form area
  document.getElementById("form_house").value = localStorage.street_number;
  document.getElementById("form_address").value = localStorage.street_name;
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
      var subLocations = [];
      for (let j = 0; j < response[i].length; j++) {
        subLocations.push(response[i][j]);
      }
      locations.push(subLocations);
    }
    console.log("Locations: ");
    console.log(locations);
    var center = {
      lat: parseFloat(localStorage.lat),
      lng: parseFloat(localStorage.lng)
    };
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: center
    });
    var marker, count;
    for (count = 0; count < locations.length; count++) {
      var infowindow = new google.maps.InfoWindow({
        maxWidth: 500
      });
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          locations[count][0],
          locations[count][1]
        ),
        map: map,
        label: `$${locations[count][5]}`
      });
      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, count) {
          return function() {
            infowindow.setContent("$" + locations[count][5]);
            infowindow.setContent(`<div id='content'>
            <h4>$${locations[count][5]} per month</h4>
            <p>${locations[count][6]}</p>
            <p>Contact for reservation: ${locations[count][4]}</p>
            <img class='photo' src='${locations[count][8]}' style='width: 450px'>
            </div>`);
            infowindow.open(map, marker);
          };
        })(marker, count)
      );
    }
  });
}

$("#leaseForm").on("submit", function(event){
  event.preventDefault();

  var address;
  var houseNumber = $("#form_house").val().trim();
  var street = $("#form_address").val().trim();
  var city = $("#form_city").val().trim();
  var state = $("#form_state").val().trim();
  var zip = $("#zip-code").val().trim();

  address = `${houseNumber} ${street}, ${city}, ${state}`;
  
  var geocoder = new google.maps.Geocoder();
  // eslint-disable-next-line prettier/prettier
  geocoder.geocode({ "address": address }, function(results, status) {
    // console.log(results);
    if (status === google.maps.GeocoderStatus.OK) {
      var lat = results[0].geometry.location.lat();
      var lng = results[0].geometry.location.lng();
      var parkingData = {
        firstName: $("#first-name").val().trim(),
        lastName: $("#last-name").val().trim(),
        phone: $("#phone-number").val().trim(),
        email: $("#email").val().trim(),
        house: houseNumber,
        street: street,
        city: city,
        state: state,
        zip: zip,
        lat: lat,
        lng: lng,
        numSpaces: $("#number-of-space").val().trim(),
        spacePrice: $("#price").val().trim(),
        spaceType: $("#parking-space-type").val().trim(),
        photo: $("#parking-space-photo").val().trim(),
      };
    
      $.ajax({
        method: "POST",
        url: "/api/Parkings/",
        data: parkingData
      }).then(function(){
        console.log("Parking space posted!");
        initMap();
        location.reload();
      });
    } else {
      console.log(
        "Geocode was not successful for the following reason: " + status
      );
    }
  });
});

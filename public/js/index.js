//If user choose to input zip code in the location box on the homepage, the data will be stored in the local storage
function searchCity() {
  console.log("i am here");

  var searchInput = document.getElementById("user-choice").value;
  localStorage.searchInput = searchInput;
  window.location.href = "map.html";
}

//If user choose the current location option and click the search button, the Google API will get the current city and state of the user

function getCity() {
  event.preventDefault();
  console.log(navigator.geolocation);
  if (navigator.geolocation) {
    //use HTML5 navigator get lat and lng
    navigator.geolocation.getCurrentPosition(function success(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      //use google map api get current city, state, street number and street name
      var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(lat, lng);
      geocoder.geocode({ "latLng": latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log(results);;
          if (results[0]) {
            //find country name
            for (var i = 0; i < results[0].address_components.length; i++) {
              for (
                var b = 0;
                b < results[0].address_components[i].types.length;
                b++
              ) {
                //find city and state
                if (results[0].address_components[i].types[b] == "locality") {
                  var city = results[0].address_components[i];
                  var state = results[0].address_components[i + 2];
                  console.log(city);
                  localStorage.city = city.short_name;
                  localStorage.state = state.short_name;
                  window.location.href = "map.html";

                  break;
                }
                //find street number
                else if (
                  results[0].address_components[i].types[b] == "street_number"
                ) {
                  var street_number = results[0].address_components[i];
                  localStorage.street_number = street_number.short_name;
                }

                //find street name
                else if (results[0].address_components[i].types[b] == "route") {
                  var street_name = results[0].address_components[i];
                  localStorage.street_name = street_name.short_name;
                }

                //find zip code
                else if (
                  results[0].address_components[i].types[b] == "postal_code"
                ) {
                  var zip_code = results[0].address_components[i];
                  localStorage.zip_code = zip_code.short_name;
                }
              }
            }
          }
        }
      });
    });
  } else {
    console.log("geo not working");
  }
}

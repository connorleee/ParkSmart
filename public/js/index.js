// eslint-disable-next-line no-unused-vars
function getInput() {
  if (document.getElementById("user-choice").value === "Current Location") {
    getCity();
  } else {
    getZip();
  }
}

function getZip() {
  event.preventDefault();
  clear();
  var zipInput = document.getElementById("user-choice").value;
  localStorage["user-input"] = zipInput;
  localStorage["zip_code"] = zipInput;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ "address": zipInput }, function (results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      lat = results[0].geometry.location.lat();
      lng = results[0].geometry.location.lng();
      localStorage["lat"] = lat;
      localStorage["lng"] = lng;
    }
    window.location.href = "map.html";
  });
}

function clear() {
  localStorage["state"] = "";
  localStorage["city"] = "";
  localStorage["street_name"] = "";
  localStorage["street_number"] = "";
  localStorage["zip_code"] = "";
  localStorage["lat"] = "";
  localStorage["lng"] = "";
}

function getCity() {
  event.preventDefault();
  clear();
  console.log(navigator.geolocation);
  if (navigator.geolocation) {
    //use HTML5 navigator get lat and lng
    navigator.geolocation.getCurrentPosition(function success(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      localStorage["lat"] = lat;
      localStorage["lng"] = lng;
      //use google map api get current city, state, street number and street name
      var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(lat, lng);
      geocoder.geocode({ "latLng": latlng }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results);
          if (results[0]) {
            //find country name
            for (var i = 0; i < results[0].address_components.length; i++) {
              for (var b = 0; b < results[0].address_components[i].types.length; b++) {
                //find city and state
                if (results[0].address_components[i].types[b] === "locality") {
                  var city = results[0].address_components[i];
                  var state = results[0].address_components[i + 2];
                  console.log(city);
                  localStorage["city"] = city.short_name;
                  localStorage["user-input"] = city.short_name + ", ";
                  localStorage["state"] = state.short_name;
                  window.location.href = "map.html";

                  break;
                }
                //find street number
                else if (
                  results[0].address_components[i].types[b] === "street_number"
                ) {
                  var street_number = results[0].address_components[i];
                  localStorage.street_number = street_number.short_name;
                }

                //find street name
                else if (results[0].address_components[i].types[b] === "route") {
                  var street_name = results[0].address_components[i];
                  localStorage.street_name = street_name.short_name;
                }

                //find zip code
                else if (results[0].address_components[i].types[b] === "postal_code") {
                  var zip_code = results[0].address_components[i];
                  localStorage.zip_code = zip_code.short_name;
                }
              }
            }
          }
        } else {
          console.log("geo not working");
        }
      });
    });
  } else {
    console.log("geo not working");
  }
}

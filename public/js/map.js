function preloadLocationValue() {

    //load the city and state name from local storage to location box
    var locationField = document.getElementById('location-input');
    var preloadValue = localStorage["city"];
    
    locationField.value = preloadValue + ", " + localStorage["state"];
    
    //load the street number, street name, city, state and zip code from local storage to the form area

    document.getElementById('form_address').value = localStorage["street_number"] + " " +  localStorage["street_name"] 

    document.getElementById('form_city').value = localStorage["city"];

    document.getElementById('form_state').value = localStorage["state"];

    document.getElementById('zip-code').value = localStorage["zip_code"];




    
}

window.onload = preloadLocationValue;
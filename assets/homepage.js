
function searchCity(){
    console.log("i am here");
    var searchInput = document.getElementById('user-choice').value;
    localStorage["searchInput"] = searchInput;
    window.location.href = "index.html";
}
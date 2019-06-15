function searchCity() {
  console.log("I am here");
  let searchInput = document.getElementById("user-choice").value;
  localStorage.searchInput = searchInput;
  window.location.href = "index.html";
}

searchCity();

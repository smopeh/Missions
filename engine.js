const name = document.getElementById("name");
const container = document.getElementById("projects");
const missionTitle = document.getElementById("missionsTitle");

name.addEventListener("click", function(event) {
  event.stopPropagation();
  name.style.visibility = "hidden";
  container.style.visibility = "visible";
  missionsTitle.style.visibility = "visible"
});

document.body.addEventListener("click", function(event) {
  if (container === event.target) {
    name.style.visibility = "visible";
    container.style.visibility = "hidden";
    missionTitle.style.visibility = "hidden";
  }
});

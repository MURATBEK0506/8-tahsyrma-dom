const trafficLight = document.getElementById("traffic-svet");
const lights = trafficLight.querySelectorAll(".svet");

let currentLightIndex = 0;

function changeLight(index) {
  lights[currentLightIndex].classList.remove("active");
  lights[currentLightIndex].classList.add("inactive");

  lights[index].classList.add("active");
  lights[index].classList.remove("inactive");

  currentLightIndex = index;
}

setInterval(() => {
  changeLight((currentLightIndex + 1) % lights.length);
}, 1000);

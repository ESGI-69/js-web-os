// Sensor API Background
var background = document.getElementById("background");

let x = 0;
let y = 0;

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  const gamma = event.gamma;
  const beta = event.beta;

  // Convertir l'angle en radians
  const radGamma = gamma * Math.PI / 180;
  const radBeta = beta * Math.PI / 180;

  // Déplacer l'image de fond en fonction de l'orientation
  x = -radGamma * 10;
  y = -radBeta * 10;

  background.style.backgroundPosition = x + "px " + y + "px";
}
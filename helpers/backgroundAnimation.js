import backgroundImage from '../assets/images/background.jpg';

// Sensor API Background
let background = document.getElementById("background");

background.src= `${backgroundImage}`;

let x = 0;
let y = 0;

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  // gamma = de gauche à droite
  // beta = de haut en bas
  let gamma = event.gamma;
  let beta = event.beta;

  // Convertir l'angle en radians
  let radGamma = gamma * Math.PI / 180;
  let radBeta = beta * Math.PI / 180;

  // Déplacer l'image de fond en fonction de l'orientation
  x = -radGamma * 20;
  y = -radBeta * 20;

  background.style.transform = "translate(" + x + "px, " + y + "px)";
}

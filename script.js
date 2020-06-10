var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".btnRandom");

color1.setAttribute("value", "#ff0000");
color2.setAttribute("value", "#ffff00");

css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0))";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function setBodyStyleBackground(c1, c2) {
	body.style.background = 
		"linear-gradient(to right, " 
		+ c1 
		+ ", " 
		+ c2
		+ ")";
}

function setRandomGradient() {
	var r11 = getRndInteger(0, 255);
	var r12 = getRndInteger(0, 255);
	var r13 = getRndInteger(0, 255);
	var r21 = getRndInteger(0, 255);
	var r22 = getRndInteger(0, 255);
	var r23 = getRndInteger(0, 255);
	
	var fistRandomColor = "rgb(" + r11 + "," + r12 + "," + r13 + ")";
	var secondRandomColor = "rgb(" + r21 + "," + r22 + "," + r23 + ")";
	setBodyStyleBackground(fistRandomColor, secondRandomColor);

	css.textContent = body.style.background + ";";

	color1.setAttribute("value", rgbToHex(r11, r12, r13));
	color2.setAttribute("value", rgbToHex(r21, r22, r23));
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
 return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function setGradient() {
	setBodyStyleBackground(color1.value, color2.value);

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
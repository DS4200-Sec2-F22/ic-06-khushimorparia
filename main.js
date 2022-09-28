function submitClicked() {
	let line = document.getElementById("line");

	line.classList.add("red");
}

document.getElementById("subButton").addEventListener("click", submitClicked);

function submitMouse() {
	let circle = document.getElementById("circle");

	circle.classList.toggle("orange");
}

document.getElementById("circle").addEventListener("mouseover", submitMouse);
document.getElementById("circle").addEventListener("mouseout", submitMouse);
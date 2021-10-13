let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let btn = document.createElement("li");
	btn.innerHTML = "Next Element";
	let lista = document.querySelector("#myList")                  
	lista.appendChild(btn);               

});

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li1 = document.querySelectorAll("li")[0];
var li2 = document.querySelectorAll("li")[1];
var li3 = document.querySelectorAll("li")[2];
var li4 = document.querySelectorAll("li")[3];
var li5 = document.querySelectorAll("li")[4];
var li6 = document.querySelectorAll("li")[5];



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone1(){
	li1.classList.toggle("done");
}
function toggleDone2(){
	li2.classList.toggle("done");
}
function toggleDone3(){
	li3.classList.toggle("done");
}
function toggleDone4(){
	li4.classList.toggle("done");
}
function toggleDone5(){
	li5.classList.toggle("done");
}
function toggleDone6(){
	li6.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li1.addEventListener("click", toggleDone1);
li2.addEventListener("click", toggleDone2);
li3.addEventListener("click", toggleDone3);
li4.addEventListener("click", toggleDone4);
li5.addEventListener("click", toggleDone5);
li6.addEventListener("click", toggleDone6);



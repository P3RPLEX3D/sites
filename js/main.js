window.onload = function readValue() {
	document.getElementById("input").innerHTML = localStorage.getItem("server");
};
window.onkeypress = function() {
    localStorage.setItem('server');
}
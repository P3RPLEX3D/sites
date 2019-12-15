
document.addEventListener('keydown',function createItem() {
var input = document.getElementById('source-html').value;
localStorage.setItem('server', input);
});

window.onload = function readValue() {
document.getElementById('source-html').innerHTML = localStorage.getItem('server');
}
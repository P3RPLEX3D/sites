var x = document.getElementById('button');
x.addEventListener('click', function prinit() {
	window.print();
})
document.addEventListener('keydown',function createItem() {
var input = document.getElementById('demo').value;
localStorage.setItem('server', input);
});

window.onload = function readValue() {
document.getElementById('demo').innerHTML = localStorage.getItem('server');
};




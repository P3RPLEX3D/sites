document.getElementById('btn').onclick = function() {

let task = document.createElement('li')
let main = document.getElementById('flex')
main.appendChild(task)
task.innerHTML = prompt('whats the note')
console.log(task)
};



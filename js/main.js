
	const input = document.getElementById('orange').value;
    window.onload = localStorage.getItem('server', input)

	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
        let input = document.getElementById('orange').value;
		localStorage.setItem("server", input);
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
    }
    document.addEventListener('keyup', function freshInfo() {
        var input = document.getElementById('orange').value; 	
        localStorage.getItem('server', input);
        
        console.log('set storage');
    } );
    
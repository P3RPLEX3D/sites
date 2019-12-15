document.addEventListener("keydown", function createItem() {
	var input = document.getElementById("demo").value;
	localStorage.setItem("server", input);
});

window.onload = function readValue() {
	document.getElementById("demo").innerHTML = localStorage.getItem("server");
};

document.addEventListener('keyup', function freshInfo() {
	var input = document.getElementById('demo').value; 	
	localStorage.setItem('server', input);
	
} );
function exportHTML() {
	document.getElementById("demo").innerHTML = localStorage.getItem("server");
	var header =
		"<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
		"xmlns:w='urn:schemas-microsoft-com:office:word' " +
		"xmlns='http://www.w3.org/TR/REC-html40'>" +
		"<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
	var footer = "</body></html>";
	var sourceHTML =
		header +
		document.getElementById("demo").innerHTML +
		footer;

	var source =
		"data:application/vnd.ms-word;charset=utf-8," +
		encodeURIComponent(sourceHTML);
	var fileDownload = document.createElement("a");
	document.body.appendChild(fileDownload);
	fileDownload.href = source;
	fileDownload.download = "document.doc";
	fileDownload.click();
	document.body.removeChild(fileDownload);
}

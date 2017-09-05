//Add click event listener to submit button
document.getElementById("submit").addEventListener("click", makeGrid);

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	console.log("ok");
	//Clear out any existing table
	var originalTable = document.getElementById("pixel_canvas");
	while (originalTable.hasChildNodes()) {
		originalTable.removeChild(originalTable.firstChild);
	}
	//Get user input values
	var rowCount = document.getElementById('input_height').value;
	var colCount = document.getElementById('input_width').value;
	//Create table based on input values
	for (var r = 0; r < rowCount; r++) {
		var x = document.getElementById('pixel_canvas').insertRow(r);
		for (var c = 0; c < colCount; c++) {
			x.insertCell(c);
		}
	}
	//Add event listener to table cells
	var pixels = document.querySelectorAll("td");
	for (var i = 0; i < pixels.length; i++) {
		pixels[i].addEventListener("click", function() {
			//Change cell color based on colorPicker value
			this.style.backgroundColor = document.getElementById("colorPicker").value;
		});
	}
}

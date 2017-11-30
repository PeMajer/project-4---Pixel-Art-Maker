/**
* @description Create pixel canvas (grid) 
*/
function makeGrid() {
	const canvasWidth = $('#input_width').val();
	const canvasHeight = $('#input_height').val();

	$('#pixel_canvas').html('');  //Delete existing canvas

	for (let i = 0; i < canvasHeight ; i++) {		//loop creating rows of grid
		$('#pixel_canvas').append('<tr></tr>');
		for (let j = 0; j < canvasWidth; j++) {		// loop creating columns of grid 
			$('#pixel_canvas tr').last().append('<td></td>');
		}
	}
}

makeGrid();		//Call makeGrid() here to create a grid of default size when the page first loads.

$(':submit').click(function(evt){	//listen for (click) event on submition button 
	evt.preventDefault();          	//cancel default action  
	makeGrid();
});


$('table').on('click','td', function(evt){   		//listen for event on table cells
	const color = $('#colorPicker').val();			//read the value of color
	$(evt.target).css('background-color', color);	//change color of table cell
});

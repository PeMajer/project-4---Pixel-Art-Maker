// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let canvasWidth = $('#input_width').val();
	let canvasHeight = $('#input_height').val();

	$('#pixel_canvas').html(' ');  //Delete exist canvas

	for (let i = 0; i < canvasHeight ; i++) {
		$('#pixel_canvas').append('<tr></tr>');
		for (let j = 0; j < canvasWidth; j++) {
			$('#pixel_canvas tr').last().append('<td></td>');
		}
	}
}



$('input').click(function(evt){
	evt.preventDefault();
	makeGrid();
});





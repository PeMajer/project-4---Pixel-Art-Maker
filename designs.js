// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	const canvasWidth = $('#input_width').val();
	const canvasHeight = $('#input_height').val();

	$('#pixel_canvas').html('');  //Delete existing canvas

	for (let i = 0; i < canvasHeight ; i++) {
		$('#pixel_canvas').append('<tr></tr>');
		for (let j = 0; j < canvasWidth; j++) {
			$('#pixel_canvas tr').last().append('<td></td>');
		}
	}
}

makeGrid();

$(':submit').click(function(evt){  
	evt.preventDefault();
	makeGrid();
});


$('table').on('click','td', function(evt){
	const color = $('#colorPicker').val();
	$(evt.target).css('background-color', color);
});

//This solution works bad. Fast clicking -> coloring whole line, more cells, etc.
/*$('#pixel_canvas').click('td', function(evt){
	let color = $('#colorPicker').val();
	//$('body').css('background-color', color);
	$(evt.target).css('background-color', color);
	console.log(color);
}); */

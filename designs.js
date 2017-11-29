// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
	$('#maxvalue').text('');

	let canvasWidth = maxWidth( $('#input_width').val() );
	let canvasHeight = maxHeight( $('#input_height').val() );

	$('#pixel_canvas').html('');  //Delete existing canvas

	for (let i = 0; i < canvasHeight ; i++) {		//loop creating rows of canvas
		$('#pixel_canvas').append('<tr></tr>');
		for (let j = 0; j < canvasWidth; j++) {		// loop creating columns of canvas
			$('#pixel_canvas tr').last().append('<td></td>');
		}
	}
}


function maxWidth(width) {
	const canvasMaxWidth = 40;
	if (width > canvasMaxWidth) {
		$('#maxvalue').text('Max value is 40.');
		$('#input_width').val(canvasMaxWidth);
		return canvasMaxWidth;
	} else {
		return width;
	}
}


function maxHeight(height) {
	const canvasMaxHeight = 40;
	if (height > canvasMaxHeight) {
		$('#maxvalue').text('Max value is 40.');
		$('#input_height').val(canvasMaxHeight);
		return canvasMaxHeight;
	} else {
		return height;
	}
}

$('#sizePicker').append('<p id="maxvalue"></p>'); //add DOM element - paragraph for maximum value message

makeGrid();

$(':submit').click(function(evt){	//listen for (click) event on submition button
	evt.preventDefault();          	//cancel default action
	makeGrid();
});


$('table').on('click','td', function(evt){   		//listen for event on tables cells
	const color = $('#colorPicker').val();			//read the value of color
	$(evt.target).css('background-color', color);	//change color of tables cell
});

var gridSize = 16;


$(document).ready(function () {
    
function createGrid() {
	
	for (var i = 0; i < gridSize * gridSize; i++) {
		$('#grid').append('<div class="square"></div>')
	}

	$('.square').css({
		'height' : (500 / gridSize) + "px",
		'width' : (500 / gridSize) +'px',
	});
}
createGrid();  


function pen() {
  	
  $('.square').mouseenter(function() {
    $(this).css('background-color', "#000");
   });
 }
pen();


});
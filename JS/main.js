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


function reset() {
	$('#reset').click(function() {
  	$('.square').css('background-color', "#fff");
  });
}
reset();


function resize() {
	$('#size').click(function() {
  	gridSize = (prompt('How fine would you like your brush? Enter a number from 1-100.'));
   createGrid();
   pen();
  });
}
resize();

});
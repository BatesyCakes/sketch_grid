var gridSize = 16;


$(document).ready(function () {
       
       
function createGrid() {
	for (var i = 0; i < gridSize * gridSize; i++) {
		$('#grid').append('<div class="square"></div>')
	}

	$('.square').css({
		'height' : ((500 / gridSize)-2) + "px",
		'width' : ((500 / gridSize)-2) +'px',
	});
}
createGrid();  


function pen() {
  $('.square').mouseenter(function() {
    $(this).css({
    	'background-color': "#000",
      'border-color': '#000',
    });
   });
 }
pen();


function reset() {
	$('#reset').click(function() {
  	$('.square').css({
    	'background-color': "#fff",
      'border-color': '#fff',
      });
    pen();
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


function rainbow() {
$("#colored").click(function(){
	$('.square').mouseenter(function() {;;
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	$(this).css({'background-color': color});
	$(this).css({'border-color': color});
	});
});
}
rainbow();

//creates a toggle grid btn
$('#togGrid').click(function() {
 $('.square').toggleClass('grid');
});

});
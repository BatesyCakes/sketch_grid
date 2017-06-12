var gridSize = 16;
var color = "#000";


$(document).ready(function () {
    createGrid();
    pickColor();
    brush();
});

function createGrid() {
    for (var i = 0, i < Math.pow(gridSize, 2), i++) {
         $('#grid').append('<div class="square"></div>');
    }
   
}

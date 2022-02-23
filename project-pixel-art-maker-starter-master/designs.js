// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let submit = document.getElementById('sizePicker')

let table = document.getElementById('pixelCanvas')

let colorPicker = document.getElementById('colorPicker')

let color = document.getElementById('colorPicker')

let tableHeight = document.getElementById('inputHeight')

let tableWidth = document.getElementById('inputWidth')
//clears grind  and generates new grid 
function makeGrid() {
    table.innerHTML = "";

    for (let r = 0; r < tableHeight.value; r++) {
        const row = table.insertRow(r);
        for (let c = 0; c < tableWidth.value; c++) {
            const cell = row.insertCell(c);
            cell.addEventListener('click', fillSquare)
        }
    }
};
//fill the cell with color maker 
function fillSquare() {
    this.setAttribute('style', `background-color: ${color.value}`);
}


colorPicker.addEventListener('click', function () {

});


//allows you to press the subit button and generates a new grid
submit.addEventListener('submit', function (event) {
    event.preventDefault();
    makeGrid();
});

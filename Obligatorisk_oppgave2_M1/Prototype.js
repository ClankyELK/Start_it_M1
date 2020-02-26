let currentlySelectedBar = "None selected";
let pooHead = '💩Oy!, WROONNG vErLuE!💩 PoO oN hEaD';

function selectedBar(barSelected) {
if (currentlySelectedBar == barSelected) {
    currentlySelectedBar = "None selected";
} else {currentlySelectedBar = barSelected}

show();
console.log(barSelected);
}
function removeSelectedBar() {
numbers.splice(parseInt(currentlySelectedBar) - 1, 1)
show();
}
function editSelectedBar() {
let display = parseInt(document.getElementById('displayValue').value);
console.log(display)
if (display >= 1 && display <= 10){
numbers[currentlySelectedBar - 1] = display
} else {alert(pooHead)}

show();
} 

function addSelectedBar() {
let display = parseInt(document.getElementById('displayValue').value);
if (display >= 1 && display <= 10){
numbers.push(display)
} else {alert(pooHead)}

show();
}
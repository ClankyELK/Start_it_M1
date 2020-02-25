let currentlySelectedBar;
function selectedBar(barSelected) {
if (currentlySelectedBar == barSelected) {
    currentlySelectedBar = 'None selected';
} else {currentlySelectedBar = barSelected}

show();


console.log(barSelected);
}
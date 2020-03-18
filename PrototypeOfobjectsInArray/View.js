function createDivChild() {
        createDiv = document.createElement('div');
        document.body.appendChild(createDiv).outerHTML = '<div id="content" onstart="showView()"></div>'
        showView(event);
    }

function showView() {
   document.getElementById('content').innerHTML = `
`;
startGame();
}  

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "green", 300, 450);
    component();
    updateGameArea();
}

function show() {
createDiv = document.createElement('div');
    document.body.appendChild(createDiv).outerHTML = '<div id="content" onstart="showView()"></div>'
    showView();
}
function showView() {
let infoTable = ``;
    html = document.getElementById('content');
let i;
infoTable = `<table> <tr>`;
    for (i = 0; i < days.length; i++) {
        const h = days[i];
        const b = h.day;
infoTable += `<th>${b}</th>`};
infoTable += `</tr></table>`;
html.innerHTML = infoTable;
};

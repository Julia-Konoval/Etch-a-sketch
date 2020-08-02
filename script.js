//document.body.onload = createGrid;
const container = document.createElement("div");
container.className = "gridContainer";

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = i + 1;
    container.appendChild(cell).className = "cell";
  }
}
createGrid(16, 16);
document.body.appendChild(container);

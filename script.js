//document.body.onload = createGrid;
const container = document.createElement("div");
container.className = "gridContainer";

const buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";

const randomColorBtn = document.createElement("button");
randomColorBtn.textContent = "Random color";
buttonContainer.appendChild(randomColorBtn);

const purpleBtn = document.createElement("button");
purpleBtn.textContent = "Select purple";
buttonContainer.appendChild(purpleBtn);

const blackBtn = document.createElement("button");
blackBtn.textContent = "Select black";
buttonContainer.appendChild(blackBtn);

function createGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "cell";

    randomColorBtn.addEventListener("click", function () {
      cell.onmouseover = function () {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        cell.style.background = bgColor;
        // cell.classList.add("hover");
      };
    });
  }
}
createGrid(16, 16);
document.body.appendChild(container);

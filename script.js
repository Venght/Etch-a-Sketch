const container = document.querySelector(".container");

function inputGrid() {
  let person = prompt("Please enter an amount from ");  
  for (i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    container.appendChild(gridItem);
  }
}

inputGrid()
const container = document.querySelector(".container");
const button = document.querySelector("#pixel");
let input;


function inputGrid(size) {
  container.textContent = "";
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.addEventListener("mouseover", () => {
      const rainbow = ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"]
      const randomColor = rainbow[Math.floor(Math.random() * rainbow.length)];
      gridItem.style.backgroundColor = randomColor;
    });

    container.appendChild(gridItem);
  }
}

function gridAdjust() {
  button.addEventListener("click", () => {
    while (true) {
      let input = prompt("Input a number between 1-100? ");
      input = Number(input);

      if (input >= 1 && input <= 100) {
        inputGrid(input)
        break;
      } else {
        alert("The value you input is not in range, input again?");
        alert(input)
      }
    }
    return input;
  });
}

function reset() {
  const resetButton = document.querySelector("#reset");
  resetButton.addEventListener('click', ()=>{
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
      item.style.backgroundColor = "white";
    })
  })
}

reset();
gridAdjust();
inputGrid(16);

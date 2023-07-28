let elevator = document.querySelector(".elevator");
let upButton = document.getElementById("up-btn");
let downButton = document.getElementById("down-btn");
let goButton = document.getElementById("go-btn");
let buildingHeight = 500;
let floorHeight = buildingHeight / 5;
let currentFloor = 1;

function moveElevator(targetFloor) {
  let targetPosition = (targetFloor - 1) * floorHeight;
  elevator.style.transition = "bottom 2s";
  elevator.style.bottom = targetPosition + "px";
  currentFloor = targetFloor;
}

upButton.addEventListener("click", () => {
  if (currentFloor < 5) {
    moveElevator(currentFloor + 1);
  }
});

downButton.addEventListener("click", () => {
  if (currentFloor > 1) {
    moveElevator(currentFloor - 1);
  }
});

goButton.addEventListener("click", () => {
  let inputFloor = prompt("Enter the desired floor (1 to 5):");
  let desiredFloor = parseInt(inputFloor);

  if (desiredFloor >= 1 && desiredFloor <= 5 && desiredFloor !== currentFloor) {
    moveElevator(desiredFloor);
  } else {
    alert("Invalid floor input. Please enter a valid floor number.");
  }
});

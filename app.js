// NOTE objects

let clickUpgrades = {
  drills: {
    price: 100,
    quantity: 0,
    multiplier: 1
  }
};

let automaticUpgrades = {
  rovers: {
    price: 600,
    quantity: 0,
    multiplier: 20
  }
};

// NOTE variables
let cheese = 0;

let manualMultiplier = 1;

let automaticMultiplier = 0;

// draw variables
let cheeseElem = document.querySelector("#cheese-count");
let drillElem = document.querySelector("#drill-count");
let roverElem = document.querySelector("#rover-count");
let manualElem = document.querySelector("#manual-multi-count");
let automaticElem = document.querySelector("#automatic-multi-count");

// NOTE functions

// update user screen
function draw() {
  // meta data
  cheeseElem.innerText = cheese;
  manualElem.innerText = manualMultiplier;
  automaticElem.innerText = automaticMultiplier;
  // upgrade count
  drillElem.innerText = clickUpgrades.drills.quantity;
  roverElem.innerText = automaticUpgrades.rovers.quantity;
  // upgrade buttons
  let drillBtn = document.querySelector("#drill-button");
  let roverBtn = document.querySelector("#rover-button");
}

// click event
function mine() {
  cheese += manualMultiplier;
  draw();
}

// automatic collection

function collectAutoUpgrades() {
  if (automaticMultiplier > 0) {
    cheese += automaticMultiplier;
    console.log(automaticMultiplier);
    draw();
  }
  return;
}

function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

// NOTE purchase methods

// manual upgrades
function buyDrill() {
  if (cheese >= clickUpgrades.drills.price) {
    clickUpgrades.drills.quantity++;
    cheese -= clickUpgrades.drills.price;
    manualMultiplier += clickUpgrades.drills.multiplier;
    console.log("puchased");
    draw();
  }
}

// automatic upgrades
function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity++;
    cheese -= automaticUpgrades.rovers.price;
    automaticMultiplier += automaticUpgrades.rovers.multiplier;
    console.log("puchased");
    draw();
  }
}

// NOTE start automatic interval
startInterval();
draw();

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

// for automatic collection
let collectionInterval = 0;

// draw variables
let cheeseElem = document.querySelector("#cheese-count");
let drillElem = document.querySelector("#drill-count");
let roverElem = document.querySelector("#rover-count");

// NOTE functions

// update user screen
function draw() {
  cheeseElem.innerText = cheese;
  drillElem.innerText = clickUpgrades.drills.quantity;
}

// click event
function mine() {
  cheese += manualMultiplier;
  draw();
}

// automatic collection

function collectAutoUpgrades() {}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

// NOTE purchase methods

function buyDrill() {
  if (cheese >= clickUpgrades.drills.price) {
    clickUpgrades.drills.quantity++;
    cheese -= clickUpgrades.drills.price;
    manualMultiplier += clickUpgrades.drills.multiplier;
    console.log("puchased");
    draw();
  }
}

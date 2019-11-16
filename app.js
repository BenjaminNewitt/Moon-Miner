// NOTE objects

let clickUpgrades = {
  pickaxes: {
    price: 100,
    quantity: 0,
    multiplier: 1
  },

  drills: {
    price: 250,
    quantity: 0,
    multiplier: 3
  }
};

let automaticUpgrades = {
  carts: {
    price: 600,
    quantity: 0,
    multiplier: 25
  },

  rovers: {
    price: 1000,
    quantity: 0,
    multiplier: 50
  }
};

// NOTE variables
let cheese = 0;

let manualMultiplier = 1;

let automaticMultiplier = 0;

// draw variables
let cheeseElem = document.querySelector("#cheese-count");
let pickaxeElem = document.querySelector("#pickaxe-count");
let drillElem = document.querySelector("#drill-count");
let cartElem = document.querySelector("#cart-count");
let roverElem = document.querySelector("#rover-count");
let manualElem = document.querySelector("#manual-multi-count");
let automaticElem = document.querySelector("#automatic-multi-count");

let cheeseBtn = document.querySelector("#cheese-button");
let pickaxeBtn = document.querySelector("#pickaxe-button");
let drillBtn = document.querySelector("#drill-button");
let cartBtn = document.querySelector("#cart-button");
let roverBtn = document.querySelector("#rover-button");

// NOTE functions

// update user screen
function draw() {
  // meta data
  cheeseElem.innerText = cheese;
  manualElem.innerText = manualMultiplier;
  automaticElem.innerText = automaticMultiplier;
  // upgrade count
  pickaxeElem.innerText = clickUpgrades.pickaxes.quantity;
  drillElem.innerText = clickUpgrades.drills.quantity;
  cartElem.innerText = automaticUpgrades.carts.quantity;
  roverElem.innerText = automaticUpgrades.rovers.quantity;
  // upgrade buttons
  if (cheese < clickUpgrades.pickaxes.price) {
    pickaxeBtn.setAttribute("disabled", "true");
  } else {
    pickaxeBtn.removeAttribute("disabled");
  }
  if (cheese < clickUpgrades.drills.price) {
    drillBtn.setAttribute("disabled", "true");
  } else {
    drillBtn.removeAttribute("disabled");
  }
  if (cheese < automaticUpgrades.carts.price) {
    cartBtn.setAttribute("disabled", "true");
  } else {
    cartBtn.removeAttribute("disabled");
  }
  if (cheese < automaticUpgrades.rovers.price) {
    roverBtn.setAttribute("disabled", "true");
  } else {
    roverBtn.removeAttribute("disabled");
  }
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
    draw();
  }
  return;
}

function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

// NOTE purchase methods

// manual upgrades
function buyPickaxe() {
  if (cheese >= clickUpgrades.pickaxes.price) {
    clickUpgrades.pickaxes.quantity++;
    cheese -= clickUpgrades.pickaxes.price;
    manualMultiplier += clickUpgrades.pickaxes.multiplier;
    clickUpgrades.pickaxes.price = Math.floor(
      (clickUpgrades.pickaxes.price *= 1.05)
    );
    draw();
  }
}

function buyDrill() {
  if (cheese >= clickUpgrades.drills.price) {
    clickUpgrades.drills.quantity++;
    cheese -= clickUpgrades.drills.price;
    manualMultiplier += clickUpgrades.drills.multiplier;
    clickUpgrades.drills.price = Math.floor(
      (clickUpgrades.drills.price *= 1.05)
    );
    draw();
  }
}

// automatic upgrades
function buyCart() {
  if (cheese >= automaticUpgrades.carts.price) {
    automaticUpgrades.carts.quantity++;
    cheese -= automaticUpgrades.carts.price;
    automaticMultiplier += automaticUpgrades.carts.multiplier;
    automaticUpgrades.carts.price = Math.floor(
      (automaticUpgrades.carts.price *= 1.05)
    );
    draw();
  }
}

function buyRover() {
  if (cheese >= automaticUpgrades.rovers.price) {
    automaticUpgrades.rovers.quantity++;
    cheese -= automaticUpgrades.rovers.price;
    automaticMultiplier += automaticUpgrades.rovers.multiplier;
    automaticUpgrades.rovers.price = Math.floor(
      (automaticUpgrades.rovers.price *= 1.05)
    );
    draw();
  }
}

// NOTE start automatic interval
startInterval();
draw();

// NOTE dev tools

function cheeseIt() {
  cheese += 9999;
  draw();
}

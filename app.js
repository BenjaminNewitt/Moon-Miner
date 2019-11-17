// NOTE upgrades

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

let onCooldown = false;

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

// prices
let pickaxePriceElem = document.querySelector("#pickaxe-price");
let drillPriceElem = document.querySelector("#drill-price");
let cartPriceElem = document.querySelector("#cart-price");
let roverPriceElem = document.querySelector("#rover-price");

// buttons
let cheeseBtn = document.querySelector("#moon");
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

  // upgrade price
  pickaxePriceElem.innerText = clickUpgrades.pickaxes.price;
  drillPriceElem.innerText = clickUpgrades.drills.price;
  cartPriceElem.innerText = automaticUpgrades.carts.price;
  roverPriceElem.innerText = automaticUpgrades.rovers.price;

  // mine cooldown
  if (onCooldown == true) {
    cheeseBtn.setAttribute("disabled", "true");
    setTimeout(() => {
      cooldown();
    }, 250);
  } else {
    cheeseBtn.removeAttribute("disabled");
  }
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
  if (onCooldown == false) {
    cheese += manualMultiplier;
    onCooldown = true;
    console.log(onCooldown);
    draw();
  }
}

// mining cooldown

function cooldown() {
  onCooldown = false;
  console.log(onCooldown);
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
function buyManualUpgrade(upgradeName) {
  // checks what onclick upgrade to purchase
  let clickUpgrade = clickUpgrades[upgradeName];
  if (cheese >= clickUpgrade.price) {
    clickUpgrade.quantity++;
    cheese -= clickUpgrade.price;
    manualMultiplier += clickUpgrade.multiplier;
    // increase price
    clickUpgrade.price = Math.floor((clickUpgrade.price *= 1.05));
    draw();
  }
}

// automatic upgrades
function buyAutomaticUpgrade(upgradeName) {
  // checks what automatic upgrade to purchase
  let autoUpgrade = automaticUpgrades[upgradeName];
  if (cheese >= autoUpgrade.price) {
    autoUpgrade.quantity++;
    cheese -= autoUpgrade.price;
    automaticMultiplier += autoUpgrade.multiplier;
    // increase price
    autoUpgrade.price = Math.floor((autoUpgrade.price *= 1.05));
    draw();
  }
}

// NOTE start interval
startInterval();
draw();

// NOTE cheat codes

function cheeseIt() {
  cheese += 9999;
  draw();
}

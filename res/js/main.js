const gemMine = document.getElementById("gemMine");
const gemMineIcon = document.getElementById("gemMineIcon");
const gems = document.getElementById("gemCount");
const gemIcon = document.getElementById("gemicon");
const clickUpgrade = document.getElementById("upgrade");
const autoClickerButton = document.getElementById("autoClicker");


let numberOfGems = 0;
let costOfClickUpgrade = 50;
let clickUpgradeIncrease = 1;
let autoClickIncrease = 0;
let autoClickInterval;
let autoClickerCost = 500;
let gemLevel = 1;

gemMine.onclick = () => {
  console.log("click");
  numberOfGems += clickUpgradeIncrease;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
};

const clickUpgradeFunction = () => {
  if (numberOfGems >= costOfClickUpgrade) {
    numberOfGems -= costOfClickUpgrade;
    gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
    clickUpgradeIncrease++;

    costOfClickUpgrade += 10;
    upgrade.innerHTML = `Upgrade gem mine: ${costOfClickUpgrade} <img src="${gemIcon.src}" alt="Gem Icon">`; 
    gemLevel += 1;
    if (gemLevel == 4) {
      gemMineIcon.src = 'res/img/Gem_Mine2.png';
    }

    if (gemLevel == 8) {
      gemMineIcon.src = 'res/img/Gem_Mine3.png';
    }

    if (gemLevel == 16) {
      gemMineIcon.src = 'res/img/Gem_Mine4.png';
    }

    if (gemLevel == 32) {
      gemMineIcon.src = 'res/img/Gem_Mine5.webp';
    }

    if (gemLevel == 64) {
      gemMineIcon.src = 'res/img/Gem_Mine6.webp';
    }

  }
};



clickUpgrade.onclick = clickUpgradeFunction;

autoClickerButton.onclick = () => {
  if (numberOfGems >= autoClickerCost) {
    numberOfGems -= autoClickerCost;
    autoClickerCost += 100;
    autoClickerButton.innerHTML = `Upgrade autominer: ${autoClickerCost} <img src="${gemIcon.src}" alt="Gem Icon">`;

    gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
    autoClickIncrease++;

    clearInterval(autoClickInterval);

    autoClickInterval = setInterval(() => {
      numberOfGems += autoClickIncrease;
      gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
    }, 1000);
  }
};









function cheats() {
  console.log("Cheats on!");
  numberOfGems += 1000000;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
}
// spousteni funkce



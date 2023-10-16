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
    if (gemLevel == 2) {
      gemMineIcon.src = 'res/img/Gem_Mine2.png';
    }

    if (gemLevel == 3) {
      gemMineIcon.src = 'res/img/Gem_Mine3.png';
    }

    if (gemLevel == 4) {
      gemMineIcon.src = 'res/img/Gem_Mine4.png';
    }

    if (gemLevel == 5) {
      gemMineIcon.src = 'res/img/Gem_Mine5.webp';
    }

    if (gemLevel == 6) {
      gemMineIcon.src = 'res/img/Gem_Mine6.webp';
    }

  }

  const upgradeSound = document.getElementById("upgradeSound");
  upgradeSound.play();
};


//background sound

const backgroundMusic = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');
const muteIcon = document.getElementById('muteIcon');

function toggleMute() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
  updateMuteIcon();
}

function updateMuteIcon() {
  if (backgroundMusic.paused) { 
    muteIcon.src = 'res/img/Mute_Icon.svg.png';
  } else {
    muteIcon.src = 'res/img/Speaker_Icon.svg.png';
  }
}

updateMuteIcon();


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

const productionBoost = document.getElementById("productionBoost");
let productionBoostCost = 10000;
let productionBoostIncrease = 1;

productionBoost.onclick = () => {
  if (numberOfGems >= productionBoostCost) {
    numberOfGems -= productionBoostCost;
    productionBoostCost += 5000;
    productionBoost.innerHTML = `Buy production boost: <br> ${productionBoostCost} <img id="gemicon" src="./res/img/gem.webp" alt="Gem Icon"> <br> (autominer required)`;




    gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;


    clearInterval(autoClickInterval);
    autoClickInterval = setInterval(() => {
      numberOfGems += autoClickIncrease;
      gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
    }, 700);
  }
};

//achivments
const achievementsButton = document.getElementById('achievementsButton');
const achievementsIcon = document.getElementById('achievementsIcon');
const achievementsSection = document.getElementById('achievementsSection');
const achievementsList = document.getElementById('achievementsList');
const popUpContainer = document.getElementById('popUpContainer');

achievementsButton.onclick = () => {
  achievementsSection.style.display = (achievementsSection.style.display === 'none' || !achievementsSection.style.display) ? 'block' : 'none';
};

function showPopUpMessage(message) {
  popUpContainer.textContent = message;
  popUpContainer.style.display = 'block';
  setTimeout(() => {
    popUpContainer.style.display = 'none';
  }, 2000);
}

let has10kAchievement = false;
let has20kAchievement = false;

function checkAchievements() {
  if (numberOfGems >= 10000 && !has10kAchievement) {
    unlockAchievement('Reached 10,000 Gems!');
    has10kAchievement = true;

    showPopUpMessage('Congratulations! Just Starting!');

    achievementsList.innerHTML += '<li>Reached 10,000 Gems</li>';
  }

  if (numberOfGems >= 20000 && !has20kAchievement) {
    unlockAchievement('Reached 20,000 Gems!');
    has20kAchievement = true;

    showPopUpMessage('Wow! 20,000 Gems!');

    achievementsList.innerHTML += '<li>Reached 20,000 Gems</li>';
  }
}


gemMine.onclick = () => {
  numberOfGems += clickUpgradeIncrease;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  checkAchievements();
};





checkAchievements();

//shop
function toggleShop() {
  var shopContainer = document.getElementById('shopContainer');
  shopContainer.style.display = (shopContainer.style.display === 'none' || shopContainer.style.display === '') ? 'flex' : 'none';
}

const shopCard = document.getElementById("shopIcon");

shopCard.onclick = () => {
  toggleShop();
};


//potions *pain*

const buyButton0 = document.getElementById("buyButton");
const buyButton1 = document.getElementById("buyButton1");
const buyButton2 = document.getElementById("buyButton2");
const buyButton3= document.getElementById("buyButton3");
const buyButton4 = document.getElementById("buyButton4");
const buyButton5 = document.getElementById("buyButton5");

const potionIcon0 = document.getElementById("potion0");
const potionIcon1 = document.getElementById("potion1");
const potionIcon2 = document.getElementById("potion2");
const potionIcon3 = document.getElementById("potion3");
const potionIcon4 = document.getElementById("potion4");
const potionIcon5 = document.getElementById("potion5");



let = costOfPotion0 = 500;
let = costOfPotion1 = 1000;
let = costOfPotion2 = 5000;
let = costOfPotion3 = 750;
let = costOfPotion4 = 200;
let = costOfPotion5 = 40000;

let = numberOfPotion0 = 0;
let = numberOfPotion1 = 0;
let = numberOfPotion2 = 0;
let = numberOfPotion3 = 0;
let = numberOfPotion4 = 0;
let = numberOfPotion5 = 0;

buyButton0.onclick = () => {
if(numberOfGems >= costOfPotion0){
  console.log("click");
  numberOfGems = numberOfGems - costOfPotion0;
  numberOfPotion0 ++;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  potions.innerHTML = `<img src="${potionIcon0.src}" alt="Gem Icon"> : ${numberOfPotion0}`;
} }

buyButton1.onclick = () => {
  if(numberOfGems >= costOfPotion1){
  console.log("click");
  numberOfGems = numberOfGems - costOfPotion1;
  numberOfPotion1 ++;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  potions1.innerHTML = `<img src="${potionIcon1.src}" alt="Gem Icon"> : ${numberOfPotion1}`;
}
} 

buyButton2.onclick = () => {
  if(numberOfGems >= costOfPotion2){
  console.log("click");
  numberOfGems = numberOfGems - costOfPotion2;
  numberOfPotion2 ++;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  potions2.innerHTML = `<img src="${potionIcon2.src}" alt="Gem Icon"> : ${numberOfPotion2}`;
  }
};

buyButton3.onclick = () => {
  if(numberOfGems >= costOfPotion3){
  console.log("click");
  numberOfGems = numberOfGems - costOfPotion3;
  numberOfPotion3 ++;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  potions3.innerHTML = `<img src="${potionIcon3.src}" alt="Gem Icon"> : ${numberOfPotion3}`;
}
};

buyButton4.onclick = () => {
  if(numberOfGems >= costOfPotion4){
  console.log("click");
  numberOfGems = numberOfGems - costOfPotion4;
  numberOfPotion4 ++;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  potions4.innerHTML = `<img src="${potionIcon4.src}" alt="Gem Icon"> : ${numberOfPotion4}`;
}
};

buyButton5.onclick = () => {
  if(numberOfGems >= costOfPotion5){
  console.log("click");
  numberOfGems = numberOfGems - costOfPotion5;
  numberOfPotion5 ++;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
  potions5.innerHTML = `<img src="${potionIcon2.src}" alt="Gem Icon"> : ${numberOfPotion5}`;
}
};










































//cheats

function cheats() {
  console.log("Cheats on!");
  numberOfGems += 1000000;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
}
// spousteni funkce



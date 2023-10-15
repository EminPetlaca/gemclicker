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




//cheats

function cheats() {
  console.log("Cheats on!");
  numberOfGems += 1000000;
  gems.innerHTML = `<img src="${gemIcon.src}" alt="Gem Icon"> ${numberOfGems}`;
}
// spousteni funkce



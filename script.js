const impulseBtn = document.getElementById("impulsknappen");
const downBtn = document.getElementById("arrowDown");
const upBtn = document.getElementById("arrowUp");
const countDisplay = document.getElementById("click");
const toBeCharged = document.getElementById("toBeCharged");
const displayInputValue = document.getElementById("inputValue");
let localStorageInputValue = localStorage.getItem("amountPerClick") || 5;
let inputValueChoices = [5, 10, 20, 50, 100];
const savingsGoal = localStorage.getItem("savings-goal");
const savingGoalInput = document.getElementById("saving-target");
const savingGoalBtn = document.querySelector(".saving-target-button");
const lockTime = localStorage.getItem("savings-goal-locked");
const popUpElement = document.querySelector(".popUp");
const form = document.querySelector("form");
const closePopUpbtn = document.querySelector(".popUpClose");

if (localStorageInputValue == 5) {
  currentInputValue = 5;
} else if (localStorageInputValue == 10) {
  currentInputValue = 10;
} else if (localStorageInputValue == 20) {
  currentInputValue = 20;
} else if (localStorageInputValue == 50) {
  currentInputValue = 50;
} else if (localStorageInputValue == 100) {
  currentInputValue = 100;
} else {
  localStorage.setItem("amountPerClick", 5);
}

displayInputValue.innerHTML = `${currentInputValue}`;
let index = inputValueChoices.indexOf(currentInputValue);

function moveInputValue(advance) {
  index =
    (index + (advance ? 1 : -1) + inputValueChoices.length) %
    inputValueChoices.length;
  currentInputValue = inputValueChoices[index];
  localStorage.setItem("amountPerClick", `${currentInputValue}`);
  displayInputValue.innerHTML = `${currentInputValue}`;
}

upBtn.addEventListener("click", () => {
  let advance = true;
  moveInputValue(advance);
});
downBtn.addEventListener("click", () => {
  let advance = false;
  moveInputValue(advance);
});

let count = 1;
impulseBtn.addEventListener("click", () => {
  ani();
  clickSession();
});

let clickSessionArr = [];

function sumAllClicks() {
  let totalCost = 0;
  for (let i = 0; i < clickSessionArr.length; i++) {
    totalCost += clickSessionArr[i];
  }
  countDisplay.innerText = `${totalCost}`;
  toBeCharged.innerHTML = `Nå har du spart ${totalCost}kr på impulskjøp :) Kjempe bra!`;
  sessionStorage.setItem("SavedInSession", totalCost);
  return totalCost;
}
let totalCost = 0;
function clickSession() {
  function clickCounter() {
    count++;
  }
  clickCounter();
  clickSessionArr.push(currentInputValue);
  sumAllClicks();
}

function ani() {
  document.getElementById("click").classList.add("numAni");
  const remAni = () => {
    document.getElementById("click").classList.remove("numAni");
    document.getElementById("click").style.opacity = "0";
  };
  setTimeout(remAni, 600);
}

function setSavedAmount() {
  let previousSaved = Number(localStorage.getItem("totalSaved"));
  let currentSessionSaved = Number(sessionStorage.getItem("SavedInSession"));
  let totalSaved = previousSaved + currentSessionSaved;
  countDisplay.innerText = `${totalSaved}`;
  toBeCharged.innerHTML = `Nå har du spart ${totalSaved}kr på impulskjøp :) Kjempe bra!`;
  sessionStorage.setItem("SavedInSession", totalSaved);
  localStorage.setItem("totalSaved", totalSaved);
  return totalSaved;
}

form.addEventListener("submit", (event) => {
  let savingGoal = savingGoalInput.value;
  let savingGoalLocked = Number(
    document.querySelector("#saving-target-lock").value,
  );
  localStorage.setItem("savings-goal", savingGoal);
  localStorage.setItem("savings-goal-locked", savingGoalLocked);
  showSavingsAccount();
});

let user = {
  preferredInputValue: localStorageInputValue,
  account: {
    sparemål: localStorage.getItem("savings-goal"),
    accountNr: 10203040506,
    locked: lockTime,
  },
  totalSaved: localStorage.getItem("totalSaved"),
};

function showSavingsAccount() {
  document.querySelector(".total-saved").innerText = `${user.totalSaved}NOK`;
  document.querySelector(".savings-goal-account").innerText =
    `${user.account.sparemål}`;
  document.querySelector(".total-saved-timeLock").innerText =
    `Låst(${lockTime}mnd)`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("endre")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      closePopUpbtn.style.display = "block";
      popUp();
    }
  });
});
function checkAccount() {
  if (savingsGoal !== null) {
    closePopUp();
  } else if (savingsGoal == null) {
    popUp();
    closePopUpbtn.style.display = "none";
  } else {
    popUp();
  }
}
checkAccount();
function popUp() {
  popUpElement.style.display = "flex";
  document.querySelector(".account-change-container").style.display = "flex";
}
function closePopUp() {
  popUpElement.style.display = "none";
  document.querySelector(".account-change-container").style.display = "none";
  showSavingsAccount();
}
window.addEventListener("beforeunload", () => {
  alert("Sending last data to localstorage, bye bye:)");
  setSavedAmount();
  sessionStorage.setItem("SavedInSession", 0);
});
window.addEventListener("pagehide", () => {
  alert("Sending last data to localstorage, bye bye:)");
  setSavedAmount();
  sessionStorage.setItem("SavedInSession", 0);
});
window.addEventListener("unload", () => {
  alert("Sending last data to localstorage, bye bye:)");
  setSavedAmount();
  sessionStorage.setItem("SavedInSession", 0);
});

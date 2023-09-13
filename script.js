const impulseBtn = document.getElementById('impulsknappen');
const downBtn = document.getElementById('arrowDown');
const upBtn = document.getElementById('arrowUp');
const countDisplay = document.getElementById('click');
const toBeCharged = document.getElementById('toBeCharged');
const displayInputValue = document.getElementById('inputValue');
const localStorageInputValue = localStorage.getItem('amountPerClick');
let inputValueChoices = [5, 10, 20, 50, 100,];

if(localStorageInputValue == 5)
{
currentInputValue = 5;
}
else if(localStorageInputValue == 10) {
currentInputValue = 10;
}
else if(localStorageInputValue == 20) {
currentInputValue = 20;
}
else if(localStorageInputValue == 50) {
currentInputValue = 50;
}
else if(localStorageInputValue == 100) {
currentInputValue = 100;
}
else{
localStorage.setItem('amountPerClick', 5)
}

displayInputValue.innerHTML = `${currentInputValue}`;
let index = inputValueChoices.indexOf(currentInputValue)

function moveInputValue(advance) {
    index = (index + (advance ? 1 : -1) + inputValueChoices.length) % inputValueChoices.length;
    currentInputValue = inputValueChoices[index]
    localStorage.setItem('amountPerClick', `${currentInputValue}`);
    displayInputValue.innerHTML = `${currentInputValue}`;
 }

upBtn.addEventListener('click', () => {
 let advance = true;
 moveInputValue(advance);
})
downBtn.addEventListener('click', () => {
    let advance = false;
    moveInputValue(advance);
}) 

let count = 1;
impulseBtn.addEventListener('click', () => {
    ani()
    clickSession()
})

let clickSessionArr = [
 ];

function sumAllClicks() {
    let totalCost = 0;
    for (let i = 0; i < clickSessionArr.length; i++) {
        totalCost += clickSessionArr[i]
    }
    countDisplay.innerText = `${totalCost}`;
    toBeCharged.innerHTML = `Nå har du spart ${totalCost}kr på impulskjøp :) Kjempe bra!`;
    return totalCost
}
let totalCost = 0;
function clickSession() {
    function clickCounter() {
        count++
     }
     clickCounter();
    clickSessionArr.push(currentInputValue);
    sumAllClicks()
}

function ani() {
    document.getElementById('click').classList.add('numAni');
    const remAni = () => {
        document.getElementById('click').classList.remove('numAni');
        document.getElementById('click').style.opacity = "0";
    }
    setTimeout(remAni, 500)
  }

//        Plans for sending amount to bank for money transfer

/*   A function that measures inactivity after 5 minutes and/or when the app is closed, will send 
  the totalCost value to be charged to the customers account
  
  function registerInactivity() {
   
  } */
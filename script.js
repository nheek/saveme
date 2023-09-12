/*
KNAPP LOGIKK
1. Counter for mengden clicks
2. Funksjon som tar mengden clicks x innsats og gir ut et objekt 
som inneholder denne infoen.
3. Funksjon som tar infoen om clicks og innsats og videresender til 
bank --> som gjennomfører transaksjonen.

POPUP
Funksjon for om det er første gang det brukes knappen.
Om JA - lager Sparekonto med navn Sparemål navn under Forklaring
OM Nei - gjemmer lag konto biten under Forklaring

clickSession = {
    inputAmount: 5,
    inputClicks: 1,
    
}

KNAPPFUNKSJONALITET
Endre Innsatsmengde ved opp og ned knapp + ved å regne ut nærmeste
5er fra tallet som skrives inn

*/
const impulseBtn = document.getElementById('impulsknappen');
const downBtn = document.getElementById('arrowDown');
const upBtn = document.getElementById('arrowUp');
const countDisplay = document.getElementById('click');
let displayInputValue = document.getElementById('inputValue');
const localStorageInputValue = localStorage.getItem('amountPerClick');
let inputValueChoices = [5, 10, 20, 50, 100,];

user = {
    standard: {
        inputValue: 5,
    },
    info: {
        userName: "testuser",
        id: 0,
        inputValue: localStorageInputValue,
    }
}


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
    console.log(`Index: ${index}`)
console.log(`currentInputValue: ${currentInputValue}`)
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
    return totalCost
}
let totalCost = 0;
countDisplay.innerText = `${totalCost}`;
function clickSession() {
    function clickCounter() {
        count++
     }
     clickCounter();
    clickSessionArr.push(currentInputValue);
    sumAllClicks()
    console.log(clickSessionArr)
}

/*
    Descrizione:
    Visualizzare in pagina 5 numeri casuali. 
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi i numeri scompaiono e 
        l’utente deve inserire, uno alla volta,
        i numeri che ha visto precedentemente, 
        tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, 
        il software dice quanti e quali dei numeri 
        da indovinare sono stati individuati.
*/
const numbersDom = document.getElementById('numbers');
const missedDom = document.getElementById('missed');
const guessedDom = document.getElementById('guessed');
let numbersGenerated = [];
let numbersPrompted = [];

numbersGenerated =  howManyNumbers(5, 1, 10);
numbersDom.innerHTML = numbersGenerated;

//dopo 30 secondi i numeri scompaiono

setTimeout(function(){
    numbersDom.classList.add('d-none');
}, 30000);

setTimeout(numbersPrompted = askPrompt(5), 310000);
 





console.log(numbersGenerated);
console.log(numbersPrompted);



//functions

function verifyArray(array1, array2){
    for(i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){


        }
    }
}

function askPrompt(howManyPrompt){
    let numbersPrompted = [];
    for(i = 0; i < howManyPrompt; i++){
        numbersPrompted.push(parseInt(prompt('inserisci il numero:')));
    }
    return numbersPrompted;
}

function howManyNumbers(quantity, min, max){
    let numbers = [];
    for(i = 0; i < quantity; i++){
        numbers.push(randomNumber(min, max));
    }
    return numbers;
}


function randomNumber(min, max){
    let number;
    number = Math.floor(Math.random() * (max - min) + 1) + min;
    return number;
}
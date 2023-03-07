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

numbersGenerated =  uniqueHowManyNumbers(5, 1, 25);
numbersDom.innerHTML = numbersGenerated;

//dopo 30 secondi i numeri scompaiono

setTimeout(function(){
    numbersDom.classList.add('d-none');
}, 3000);
// }, 30000);

setTimeout(function(){
    numbersPrompted = askPromptReturnArray(5);
    console.log(numbersPrompted);
    verifyArray(numbersGenerated, numbersPrompted, guessedDom, missedDom);
    
}, 3100);
// }, 31000);
 




console.log(numbersGenerated);



//functions

function verifyArray(array1, array2, domElement1, domElement2){
    let guessed = 0;
    let missed = 0;
    for(i = 0; i < array1.length; i++){
        if(array2.includes(array1[i])){
            guessed++;
            domElement1.innerHTML += `ti sei ricordato il numero ${array1[i]}!<br>`
            
        }else if(!array2.includes(array1[i])){
            missed++;
        }
    }
    domElement1.innerHTML += `hai indovinato ${guessed} numeri!<br>`
    domElement2.innerHTML = `ti sei dimenticato ${missed} numeri`;
}

function askPromptReturnArray(howManyPrompt){
    let numbersPrompted = [];
    for(i = 0; i < howManyPrompt; i++){
        numbersPrompted.push(parseInt(prompt('inserisci il numero:')));
    }
    return numbersPrompted;
}

// function howManyNumbers(quantity, min, max){
//     let numbers = [];
//     for(i = 0; i < quantity; i++){
//         numbers.push(randomNumber(min, max));
//     }
//     return numbers;
// }

function uniqueHowManyNumbers(quantity, min, max){
    let numbers = [];
    
    for(i = 0; i < quantity; i++){
        
        let valid = false;
        let randomNumberGenerated = 0;
        while(!valid){
            randomNumberGenerated = randomNumber(min, max);
            if(!numbers.includes(randomNumberGenerated)){
                numbers.push(randomNumberGenerated);
                valid = true;
            }
        }

    }
    return numbers;
}


function randomNumber(min, max){
    let number;
    number = Math.floor(Math.random() * (max - min) + 1) + min;
    return number;
}
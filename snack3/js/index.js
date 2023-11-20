
function wordLength (firstWord, secondWord) {
    if (firstWord.length > secondWord.length) {
        console.log(firstWord);
    } else if (firstWord.length < secondWord.lenght) {
        console.log(secondWord);
    } else {
        console.log(firstWord, secondWord);
    }
}

const firstWord = prompt("Inserisci la prima parola: ");
const secondWord = prompt("Inserisci la seconda parola: ");
wordLength(firstWord, secondWord);
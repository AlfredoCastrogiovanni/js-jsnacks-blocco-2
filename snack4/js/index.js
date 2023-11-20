
function isdivisible(numberOne, numbertwo) {
    if (numberOne == numbertwo) {
        return numberOne;
    } else if (numberOne % numbertwo == 0) {
        return true;
    }
    return false;
}

const firstNumber = parseInt(prompt("Inserisci il primo numero:"));
const SecondNumber = parseInt(prompt("Inserisci il secondo numero:"));

switch (isdivisible(firstNumber, SecondNumber)) {
    case firstNumber:
        console.log("I due numeri sono uguali");
        break;
    case true:
        console.log("Il numero è divisibile");
        break;
    case false:
        console.log("Il numero non è divisibile");
        break;
}

const userNumberList = [];
let sum = 0;

while(sum < 50) {
    const userNumber = parseInt(prompt("Inserisci un numero: "));
    userNumberList.push(userNumber);
    for (let i=0; i < userNumberList.length; i++) {
        sum += userNumberList[i];
    }
}

console.log("Ciclo terminato");

const wrapper = document.getElementById("wrapper");
const userSquareNumber = parseInt(prompt("Inserisci il numero di quadrati: "));
createSquare(userSquareNumber);

function createSquare(squareNumber) {
    for(let i=0; i < squareNumber; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        wrapper.append(newSquare);
    }
}
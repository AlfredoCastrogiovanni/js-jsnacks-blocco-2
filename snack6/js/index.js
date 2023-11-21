
const wrapper = document.getElementById("wrapper");
const userSquareNumber = parseInt(prompt("Inserisci il numero di quadrati: "));
createSquare(userSquareNumber);

function createSquare(squareNumber) {
    for(let i=0; i < squareNumber; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");

        const squareContent = document.createElement("span");
        squareContent.textContent = generateRandomNumber(1,i);
        newSquare.append(squareContent);
        
        parseInt(squareContent.textContent) % 2 == 0 ? newSquare.classList.add("bg-blue") : newSquare.classList.add("bg-red");

        newSquare.addEventListener("click", function() {
            this.classList.toggle("clicked");
        });
        
        wrapper.append(newSquare);
    }
}

// Random number between two numbers
function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}
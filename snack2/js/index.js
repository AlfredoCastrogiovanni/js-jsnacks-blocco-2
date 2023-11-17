
const listName = [
    "Paolo",
    "Franco",
    "Gino",
    "Gina",
    "Luca"
];

const listSurname = [
    "Rossi",
    "Verdi",
    "Gialli",
    "Arancio"
];

const fakeList = [];

for (let i=0; i < listName.length && i < listSurname.length; i++) {
    fakeList.push(listName[Math.floor(Math.random() * listName.length)] + " " + listSurname[Math.floor(Math.random() * listSurname.length)]);
}

console.log(fakeList);
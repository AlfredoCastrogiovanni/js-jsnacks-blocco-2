
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
    fakeList[i] = listName[i] + " " + listSurname[i];
}

console.log(fakeList);
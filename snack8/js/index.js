
const courgettes = [
    {
        variety: "nera",
        weight: 1,
        lenght: 30
    },

    {
        variety: "trombetta",
        weight: 3,
        lenght: 20
    },

    {
        variety: "romanesca",
        weight: 7,
        lenght: 15
    },

    {
        variety: "nera",
        weight: 10,
        lenght: 17
    },

    {
        variety: "tonde",
        weight: 4,
        lenght: 32
    },

    {
        variety: "nera",
        weight: 6,
        lenght: 10
    },

    {
        variety: "romanesca",
        weight: 7,
        lenght: 9
    },

    {
        variety: "nera",
        weight: 2,
        lenght: 4
    },

    {
        variety: "tonde",
        weight: 3,
        lenght: 1
    },

    {
        variety: "trombetta",
        weight: 9,
        lenght: 3
    }
];

console.log(courgettesWeight());

function courgettesWeight() {
    let weight = 0;
    for(let i=0; i < courgettes.length; i++) {
        weight += courgettes[i].weight;
        console.log(courgettes[i].weight)
    }
    return weight;
}
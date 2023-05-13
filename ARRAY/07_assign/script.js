let casa = {
    sala: 1,
    quartos: 4,
    varanda: true
};

let moveis = {
    sofa: 2,
    tv: 4,
    arcondicionado: true
};

console.log(casa);

Object.assign(casa, moveis);

console.log(casa);
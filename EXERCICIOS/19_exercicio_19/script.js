function numAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
};

console.log(numAleatorio(10));
console.log(numAleatorio(100));
console.log(numAleatorio(1000));
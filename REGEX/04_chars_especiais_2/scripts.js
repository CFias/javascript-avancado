const dia = /\d\d/;

console.log('Dois digitos');

console.log(dia.test("2023") && "2023".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asd1"));


console.log('Palavras com três letras.');

const palavrasTresLetras = /\w\w\w/;

console.log(palavrasTresLetras.test('asd'));
console.log(palavrasTresLetras.test('asdd') && "asdd".length == 3);
console.log(palavrasTresLetras.test('as'));
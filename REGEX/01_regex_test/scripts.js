const reg1 = new RegExp('Carro');

console.log(reg1.test('Tem Carro'));
console.log(reg1.test('Não tem'));

const reg2 = /bola/;
let teste = 'Tem bola no campo!';

console.log(reg2.test('Tem bola'));
console.log(reg2.test('não tem'));
console.log(reg2.test(teste));

console.log(/quadrado/.test('Tem um quadrado aí?'));
console.log(/quadrado/.test('Tem um adadadwedasdquadradofsafdadasdqwe aí?'));
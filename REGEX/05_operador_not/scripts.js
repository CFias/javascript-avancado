const meuNome = /[^CleidsonFias]/;

console.log(meuNome.test("Olá, Ramos"));
console.log(meuNome.test("CleidsonFias"));
console.log(meuNome.test("Cleidson"));


const notToaz = /[^a-z]/;

console.log(notToaz.test("asd"));
console.log(notToaz.test("123 asd"));

// O not busca apenas padrões que não contenham caracteres de A a Z isolados.

const az = /[a-z]/;

console.log(notToaz.test("asd"));
console.log(notToaz.test("asdsadsdasd213sad2314234"));
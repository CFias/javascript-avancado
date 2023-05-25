const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("cleidson.fias@hotmail.com"));
console.log(validarEmail.test("teste@hotmail.com.br"));
console.log(validarEmail.test("teste@gmail.com.br"));
console.log(validarEmail.test("@gmail.com.br"));
console.log(validarEmail.test("teste@gmail"));
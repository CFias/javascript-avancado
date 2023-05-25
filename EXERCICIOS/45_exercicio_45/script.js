const validarName = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarName.test("cfias_ramos"));
console.log(validarName.test("CFias-Ramos"));
console.log(validarName.test("CF"));
console.log(validarName.test("CFiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas"));

const validaDominio = /[?www.]\w+\.com|.com.br/;

console.log(validaDominio.test("www.cleidsonfias.com"));
console.log(validaDominio.test("www.cleidsonfias.com.br"));
console.log(validaDominio.test("www.cleidsonfias"));
console.log(validaDominio.test("cleidsonfias.com.br"));
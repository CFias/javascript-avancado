const cep = /\d{5}-\d{3}/;

console.log(cep.test("43700-000"));
console.log(cep.test("43700000"));
console.log(cep.test("asd"));
console.log(cep.test("99999-999"));


const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(71)98864-6588"));
console.log(tel.test("71 98864-6588"));
console.log(tel.test("71 8864-6588"));
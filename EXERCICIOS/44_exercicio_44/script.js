const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("188.0.0.1"));
console.log(validarIp.test("188.05.0.1"));
console.log(validarIp.test("188.05.0"));
console.log(validarIp.test("1.0.0.0"));
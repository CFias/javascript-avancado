const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: His"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Adidas"));
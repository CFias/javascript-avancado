const validarDatas = /[0-31]{2}[/][0-12]{2}[/][1910-2023]{4}/;

console.log(validarDatas.test("31/00/1998"));
console.log(validarDatas.test("20-07-1998"));
console.log(validarDatas.test("20/07/98"));
console.log(validarDatas.test("20/7/1998"));
console.log(validarDatas.test("1998/07/20"));
console.log(validarDatas.test("19/07/2020"));
console.log(validarDatas.test("31/00/2020"));
console.log(validarDatas.test("31/00/1998"));

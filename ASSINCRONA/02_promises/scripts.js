let p = Promise.resolve(5);

console.log("Outros Códigos");

console.log(p);

p.then((value) => { return value + 5})
 .then((value) => console.log(value));  


let nome = Promise.resolve('Cleidson');

nome.then((value) => { return value + ' Fias'})
    .then((value) => console.log(value));

console.log('Seu nome é');

let conjutos = Promise.resolve('Você é nota: ');

conjutos.then((value) => { return value + 1000})
        .then((value) =>  console.log(value));
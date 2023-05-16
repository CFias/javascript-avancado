let pessoas = ['Milena', 'Cleidson', 'Cândida'];

console.log(pessoas.includes('Milena'));
console.log(pessoas.includes('Cleidson'));
console.log(pessoas.includes('Celia'));

if (pessoas.includes('Milena') == false) {
    console.log(`Milena consta na sua lista`);
} else {
    console.log(`Valor não consta na lista`);
};
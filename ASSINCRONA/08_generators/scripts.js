function* criadorId() {
    let id = 0;
    while(true) {
        yield id++
    }
};

let idProdutos = criadorId();

console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);
console.log(idProdutos.next().value);

console.log(idProdutos.next());
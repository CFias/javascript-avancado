function criarCarro (marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
};

criarCarro.prototype.ligarCarro = function() {
    console.log('Carro ligado!');
};

let vw = new criarCarro('VW', 'Voyage', 'Prata');
console.log(vw);

vw.ligarCarro();


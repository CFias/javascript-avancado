function criarCarro (marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    this.ligarCarro = function() {
        console.log('Carro ligado!');
    }
};

let vw = new criarCarro('VW', 'Voyage', 'Prata');
console.log(vw);

vw.ligarCarro();


function contruirCasa(andares,quartos,piscina,garagem) {
    this.andares = andares;
    this.quartos = quartos;
    this.piscina = piscina;
    this.garagem = garagem;
    this.ligarArcondicionado = function () {
        console.log('Ar ligado!');
    }
};

let mansao = new contruirCasa(3, 4,'Piscina de 30m', 'Garagem para 4 carros');
console.log(mansao);

mansao.ligarArcondicionado();
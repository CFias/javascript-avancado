function criarCarros (marca, modelo, cor) {
    let carro = Object.create({});
    carro.marca = marca;
    carro.modelo = modelo;
    carro.cor = cor;
    carro.ligarCarro = function() {
        console.log('Carro ligado!');
    }
    return carro;
};

let ford = criarCarros('Ford', 'Ranger', 'Preta');
console.log(ford)

ford.ligarCarro();



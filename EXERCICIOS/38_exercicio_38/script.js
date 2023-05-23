class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua) {
        this.rua = novaRua;
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua Maceió", "Jardim Eldorado", "Salvador", "Bahia");
console.log(endereco);

endereco.novaRua = "Rua Salvador"
console.log(endereco)

endereco.novoBairro = "KM 25"
console.log(endereco);

endereco.novaCidade = "Simões Filho";
console.log(endereco);

endereco.estado = "BA"
console.log(endereco);
class Banco {
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(sacou) {
        this.saldo -= sacou;
    }
};

let nubank = new Banco(1000);
nubank.deposito(1500);

console.log(nubank);

nubank.saque(500);
console.log(nubank);
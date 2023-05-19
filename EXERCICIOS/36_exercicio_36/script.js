class Banco {
    constructor(saldo) {
        this.saldo = saldo;
    }
    deposito() {
        console.log('Dinheiro depositado');
    }
    saque() {
        console.log('Dinheiro sacado')
    }
};

let Nubank = new Banco('R$ 27.000,00');

console.log(Nubank);
Nubank.deposito();
Nubank.saque();
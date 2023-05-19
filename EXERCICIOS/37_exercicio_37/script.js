class Compras {
    constructor(itens, qtdTotal, valorTotal) {
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.valorTotal = valorTotal;
    }
    addItem(item) {
        for(let itemCarrinho in this.itens) {
           if(this.itens[itemCarrinho].id == item.id) {
            this.itens[itemCarrinho].qtd += item.qtd;
           };
        }
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd -= item.id
            };
        }
    }
};

let Carrinho = new Compras([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 60
    },
    {
        id: 03,
        nome: "Casaco",
        qtd: 4,
        preco: 220
    }
], 3, 300);

console.log(Carrinho);
Carrinho.addItem({id:01, nome:"Camisa", qtd:3, preco:35});
console.log(Carrinho);




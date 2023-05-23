class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for (let itemCarrinho in this.itens) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;

    }

    removeItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {

                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {
                        return obj.id == item.id
                    }
                )
                this.qtd -=  this.itens[itemCarrinho].qtd;
                this.valorTotal -=  this.itens[itemCarrinho].preco *  this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);

            }
        }
    }

};

let carrinho = new Carrinho ([
    {
        id: 01,
        nome: "Camisa",
        qtd: 3,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
],5, 160);

console.log(carrinho);

carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco:20});
console.log(carrinho);

carrinho.addItem({id:03, nome:"Sapato", qtd:5, preco:110});
console.log(carrinho);

carrinho.removeItem({id:01, nome:"Camisa", qtd:02, preco:20});
console.log(carrinho);


class Sacola {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addProduto(produto) {

        let contador = 0;

        for(let produtoSacola in this.itens) {
            if(this.itens[produtoSacola].id == produto.id) {
                this.itens[produtoSacola].qtd += produto.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(produto);
        }

        this.qtd += produto.qtd;
        this.valorTotal += produto.preco * produto.qtd;
    }
};

let sacola = new Sacola ([
    {
        id:01,
        produto:"Shampoo",
        qtd:3,
        preco:15
    },
    {
        id:02,
        produto:"Feijão",
        qtd:4,
        preco:8
    }
], 7, 77);

console.log(sacola);

sacola.addProduto({id:03, produto:"Suco", qtd:3, preco:6});
console.log(sacola);
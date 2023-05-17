let nomes = ['Cleidson', 'Milena', 'Cândida', 'Geraldo', 'Neelam', 'Claise'];

let cidades = ['Salvador', 'Simões Filho', 'Lauro de Freitas'];


function verificarElementosArray (arr) {
    if (arr.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
};

verificarElementosArray(cidades);
verificarElementosArray(nomes);
function lembrarSoma(x) {
  return function(y) {
    return x + y;
  }
};

let soma1 = lembrarSoma(2);
console.log(soma1(5));

let soma2 = lembrarSoma(2);
console.log(soma2(23));


function lembrarNome(nome) {
  return function(sobrenome) {
    return nome + sobrenome;
  }
};
let nomeCompleto1 = lembrarNome("Cleidson");
console.log(nomeCompleto1("Fias"));

let nomeCompleto2 = lembrarNome("Milena");
console.log(nomeCompleto2("Fias"));


function contador(i) {
  let cont = i;
  let somarContador = function() {
    console.log(cont);
    cont++;
  }
  return somarContador;
};

let meuContador = contador(1);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();


function nomeTeste(n) {
  let no = n;
  let atribuirNome = function() {
    console.log(no);
    no++;
  }
  return atribuirNome;
};

let meuNome = nomeTeste("Cleidson");
meuNome();
function nomeCompleto(nome, sobrenome = "Sobrenome"){
    return nome + sobrenome;
};
console.log(nomeCompleto("Cleidson", "Fias"));
console.log(nomeCompleto("Milena"));


function potencia(base, exp = 2) {
  return Math.pow(base, exp);
};
console.log(potencia(2));
console.log(potencia(2,2));
console.log(potencia(2,3));
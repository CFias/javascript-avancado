let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto js");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#t1");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);
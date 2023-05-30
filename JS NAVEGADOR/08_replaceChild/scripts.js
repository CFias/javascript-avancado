let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto de teste");

novoElemento.appendChild(texto);

let heading = document.querySelector("#t1");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);

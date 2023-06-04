let elemento = document.querySelector('#t1');

console.log('Largura: ' + elemento.offsetWidth);  // Considera as bordas
console.log('Altura: ' + elemento.offsetHeight);


console.log('Largura: ' + elemento.clientWidth);  // Nãp considera as bordas
console.log('Altura: ' + elemento.clientHeight);
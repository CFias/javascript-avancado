function checarNumber(num) {
    let number = Number(num);
    if(Number.isNaN(number)) {
        alert("Por favor, passe apenas números.")
    } else {
        return number;
    }
};

checarNumber(5);
checarNumber('abc');

let number = prompt('Digite aqui um número')

checarNumber(number);
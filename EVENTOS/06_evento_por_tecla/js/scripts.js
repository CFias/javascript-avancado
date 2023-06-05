window.addEventListener("keydown", function(e) {

    if(e.key == "a") {
        console.log("Uma letra do alfabeto");
    }

});

window.addEventListener("keyup", (e) => {

    if(e.key == "m") {
        console.log("Letra M de Milena.");
    } else if(e.key == "Enter") {
        console.log("Soltou o Enter");
    } else {
        console.log("Apertou outra tecla não definida");
    }
    
});
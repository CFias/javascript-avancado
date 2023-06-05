let input = document.querySelector("#input1");

input.addEventListener("focus", () => {
    
    console.log("Entrou no input");

});

input.addEventListener("blur", () => {
    
    console.log("Saiu do input");

});
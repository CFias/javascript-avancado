let idade = 15;
let cnh = false;

if (idade > 18 && cnh == false) {
    console.log("Você não pode dirigir");
} else if (idade > 18 && cnh == true) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você é menor de idade!");
}
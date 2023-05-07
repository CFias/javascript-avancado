let nome = "Cleidson Fias";

for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        nome = "Fias";
        console.log(nome)
    }

    if (i == 5 && nome == "Fias") {
        console.log("O nome é Fias, pode parar!");
        break;
    }
    console.log(i);
}

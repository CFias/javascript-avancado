function multas(vel) {

    if (vel > 80) {
        console.log(`${vel}km. Você ultrapassou a velocidade permitida.`);
    } else {
        console.log(`${vel}km. Velocidade permitida.`);
    }

}
multas(90);


function multiplicarTresValores(x, y, z) {

  return  x * y * z;

}
const result = multiplicarTresValores(5,10,15);
console.log(result)


function permissaoDirigir(idade, cnh) {

    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir tranquilamente.");
    } else if (idade >= 18 && cnh == false) {
        console.log("Não pode dirigir!");
    } else {
        console.log("Menor de idade.")
    }

}
permissaoDirigir(24,1);
permissaoDirigir(24,0);
permissaoDirigir(24,true);
permissaoDirigir(24,false);
permissaoDirigir(15,1);
permissaoDirigir(17,1);
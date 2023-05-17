let frase = "Tudo posso naquele que me fortalece.";

let arr = frase.split(" ");

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

arr.forEach(nome => {
    console.log(nome);
});
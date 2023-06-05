let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p")
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let pai = document.querySelector("div");
let a = document.querySelector("a");


function msg(e) {
    console.log("Clicou no button");
    e.stopPropagation();
};

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log("Clicou em mim");
});

p.addEventListener("click",function () {
    console.log("Clicou no parágrafo");
});



function teste(event) {
    console.log("Clicou no pai")
    event.stopPropagation();
}

pai.addEventListener("click", teste);

p1.addEventListener("click", function(event) {
    console.log("Clicou no primeiro nome");
    event.stopPropagation();
});

p2.addEventListener("click", (event) => {
    console.log("Clicou no segundo nome");
    event.stopPropagation();
});


a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("O link não irá mudar.")
})
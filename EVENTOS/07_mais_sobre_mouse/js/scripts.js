let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");


btn1.addEventListener("mousedown", () => {
    console.log("Apertou no botão");
});

btn1.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

btn2.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Clicou com o botão direito.");
});

btn2.addEventListener("dblclick", () => {
    console.log("Double Click");
});
let a = document.querySelector("footer a");

console.log(a.getAttribute("href"));

let link = "https://github.com/CFias";

a.setAttribute('href', link);

console.log(a.getAttribute("href"));
//window.addEventListener("load", () => {
//    alert("Assine os nossos termos de uso");
//});

window.addEventListener("beforeunload", function(event) {
     event.returnValue = null;
});
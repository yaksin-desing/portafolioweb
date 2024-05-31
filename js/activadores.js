
const abrirpopup=document.querySelector("#abrirpopup");

const cerrarpopup=document.querySelector("#cerrarpopup");

const popup=document.querySelector("#popup");

abrirpopup.addEventListener("click",()=>{
    popup.showModal();
})
cerrarpopup.addEventListener("click",()=>{
    popup.close();
})


let observer = new IntersectionObserver(menuactivo, {});

let observersegu = new IntersectionObserver(seguactivo, {});

let barramenu = document.querySelector("#barranav");
observer.observe(barramenu)

let barramenua = document.querySelector("#barranava");
observer.observe(barramenua)

let segur = document.querySelector("#seguro");
observersegu.observe(segur)

var verbar = null;
var verseg = null;



function menuactivo(entries) {
    let entrada = entries[0];
    if (entrada.isIntersecting) {
        console.log("es visible")
        barramenu.classList.remove("ctive")
        barramenua.classList.remove("ctive")
        verbar = "verdaderoo";

    }

    else {
        console.log("no visible")
        barramenu.classList.add("ctive")
        barramenua.classList.add("ctive")
        verbar = "falsoo";

    }
};

function seguactivo(entries) {
    let entradasegu = entries[0];
    if (entradasegu.isIntersecting) {
        console.log("es visible seguro")
        verseg = true;

    }
    
    else {
        console.log("no visible seguro")
        verseg = false;

    }
};





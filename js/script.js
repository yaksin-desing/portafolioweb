let condicion = true;

document.querySelector(".bars__menu").addEventListener('click', () => {
    animateBars();
    console.log(condicion+"hola");

    if (condicion) {

        document.getElementsByTagName("html")[0].style.overflowY = "auto";
        document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    } else {

        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
        document.getElementsByTagName("html")[0].style.overflowX = "hidden";
    }



});

var conter_menu = document.querySelector(".contendor_activo_de_menu");
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");


function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    conter_menu.classList.toggle("contendor_activo_de_menu_op");
    condicion = !condicion;
}




var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0


gsap.to({}, 0.050, {
    repeat: -1,
    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});



window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});



cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});


LottieInteractivity.create({
    player: '#mydesign1',
    mode: "scroll",
    actions: [{
        visibility: [0.2, 1.0],
        type: "play"
    }]
});

const contenedoranimate = document.querySelector(".contenedor_de_animaciones");
const altodecontenedor = window.innerWidth;
let string = altodecontenedor.toString();
var altoanimate = [string * 10, "0"].toString();




const races = document.querySelector("#uno_skill");



const timeskill = gsap.timeline({
    scrollTrigger: {
        trigger: ".capa_contenedora",
        start: "top top",
        end: altoanimate,
        markers: false,
        pin: true,
        scrub: 1,
    }
});

timeskill.to(".titulouno", {
    y: "0",
    duration: 10,
});

timeskill.to(".subtitulo_aboutme", {
    y: "0",
    duration: 10,
});


timeskill.to(".cont_horizontal_dos", {
    y: "-100vh",
    duration: 10,
});

timeskill.to(".cont_horizontal_tres", {
    y: "-100vh",
    duration: 10,
});

timeskill.to(".cont_horizontal_cuatro", {
    y: "-100vh",
    duration: 10,
});

timeskill.to(".cont_horizontal_cinco", {
    y: "-100vh",
    duration: 10,
});



let timedia = gsap.matchMedia();

timedia.add("(max-width:800px)", () => {



})












const tll = gsap.timeline({
    scrollTrigger: {
        trigger: ".contenedor_de_animaciones",
        start: "top top",
        end: altoanimate,
        markers: false,
        pin: true,
        scrub: 1,
    }
});

let mtll = gsap.matchMedia();

mtll.add("(max-width:800px)", () => {

    tll.to(".fondo_negro", {
        scale: 1500,
        duration: 10,
    });


    tll.to(".cont_animacion_uno", {
        opacity: "100%",
        duration: 5,
    });

    tll.to("#contador_uno", {
        y: 0,
        duration: 20,
    });

    tll.to("#titulo_uno", {
        y: 0,
        duration: 20,
    });

    tll.to("#contenido_uno", {
        y: 0,
        duration: 20,
    });


    tll.to("#contador_uno", {
        y: 150,
        duration: 20,
    });

    tll.to("#titulo_uno", {
        y: 150,
        duration: 20,
    });

    tll.to("#contenido_uno", {
        y: 150,
        duration: 20,
    });

    tll.to(".fondo_blanco", {
        scale: 2000,
        duration: 20,
    });

    tll.to(".cont_animacion_dos", {
        opacity: "100%",
        duration: 20,
    });

    tll.to("#contador_dos", {
        y: 0,
        duration: 20,
    });

    tll.to("#titulo_dos", {
        y: 0,
        duration: 20,
    });

    tll.to("#contenido_dos", {
        y: 0,
        duration: 20,
    });

    tll.to("#contador_dos", {
        y: 150,
        duration: 20,
    });

    tll.to("#titulo_dos", {
        y: 150,
        duration: 20,
    });

    tll.to("#contenido_dos", {
        y: 150,
        duration: 20,
    });

    tll.to(".fondo_negro_dos", {
        scale: 2000,
        duration: 30,
    });

    tll.to(".cont_animacion_tres", {
        delay: 2,
        opacity: "100%",
        duration: 20,
    });

    tll.to("#contador_tres", {
        y: 0,
        duration: 20,
    });

    tll.to("#titulo_tres", {
        y: 0,
        duration: 20,
    });

    tll.to("#contenido_tres", {
        y: 0,
        duration: 20,
    });
})


mtll.add("(min-width:800px)", () => {
    tll.to(".fondo_negro", {
        scale: 2000,
        duration: 5,
    });


    tll.to(".cont_animacion_uno", {
        opacity: "100%",
        duration: 5,
    });

    tll.to("#contador_uno", {
        y: 0,
        duration: 5,
    });

    tll.to("#titulo_uno", {
        y: 0,
        duration: 5,
    });

    tll.to("#contenido_uno", {
        y: 0,
        duration: 5,
    });


    tll.to("#contador_uno", {
        y: 150,
        duration: 5,
    });

    tll.to("#titulo_uno", {
        y: 150,
        duration: 5,
    });

    tll.to("#contenido_uno", {
        y: 150,
        duration: 5,
    });

    tll.to(".fondo_blanco", {
        scale: 2000,
        duration: 5,
    });

    tll.to(".cont_animacion_dos", {
        opacity: "100%",
        duration: 5,
    });

    tll.to("#contador_dos", {
        y: 0,
        duration: 5,
    });

    tll.to("#titulo_dos", {
        y: 0,
        duration: 5,
    });

    tll.to("#contenido_dos", {
        y: 0,
        duration: 5,
    });

    tll.to("#contador_dos", {
        y: 150,
        duration: 5,
    });

    tll.to("#titulo_dos", {
        y: 150,
        duration: 5,
    });

    tll.to("#contenido_dos", {
        y: 150,
        duration: 5,
    });

    tll.to(".fondo_negro_dos", {
        scale: 2000,
        duration: 5,
    });

    tll.to(".cont_animacion_tres", {
        delay: 2,
        opacity: "100%",
        duration: 5,
    });

    tll.to("#contador_tres", {
        y: 0,
        duration: 5,
    });

    tll.to("#titulo_tres", {
        y: 0,
        duration: 5,
    });

    tll.to("#contenido_tres", {
        y: 0,
        duration: 5,
    });
})









let sections = gsap.utils.toArray(".cont_reels");
let reel = gsap.utils.toArray(".reel_uno");

const finalreel = reel[0].clientWidth * 3;
let finalstring = finalreel.toString();
var arr = ["+=" + finalstring].toString();

gsap.to(sections, {
    x: -finalstring,
    y: "-30vh",
    ease: "none",

    scrollTrigger: {
        trigger: ".cont_reel_diagonal",
        pin: true,
        scrub: 1,
        end: arr,
        markers: false,
    }
});


let meel = gsap.matchMedia();

meel.add("(max-width:720px)", () => {

    gsap.to(
        sections, {
            x: "150vw",
            y: "50vh",
        },
    )
})









function menuactivo(entries) {
    let entrada = entries[0];
    if (entrada.isIntersecting) {

        barramenu.classList.remove("ctive")
        barramenua.classList.remove("ctive")
        verbar = true;

    } else {

        barramenu.classList.add("ctive")
        barramenua.classList.add("ctive")
        verbar = false;

    }
};






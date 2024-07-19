


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


let condicion = true;

document.querySelector(".bars__menu").addEventListener('click', () => {
    animateBars();
    console.log(condicion);

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
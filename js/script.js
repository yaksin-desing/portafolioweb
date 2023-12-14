gsap.registerPlugin(ScrollTrigger)
const boton = document.querySelector(".float__wapp")

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".conta_scroll_boton",
        pin: true,
        star: "top top",
        end: "100% 100%",
        scrub: 2,
    },
})

tl.to(
    boton, {
        scale: 0.8,
        rotate: "0deg",
        x: "22vw",
        y: "60vh",
        duration: 1,
    },
)

let mm= gsap.matchMedia();

mm.add("(max-width:720px)",()=>{
    
tl.to(
    boton, {
        scale: 0.8,
        rotate: "0deg",
        x: "5vw",
        y: "80vh",
        duration: 1,
    },
)
}
)






const races = document.querySelector(".cont_horizontal_ocho");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth+0);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration:5,
	ease: "none",
},

);


ScrollTrigger.create({
	trigger:".capa_contenedora",
	start:"top top",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:2,
	invalidateOnRefresh:true,
	markers:false,
    
}
)





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


const aboutme = document.querySelector(".animacion_aboutme");

LottieInteractivity.create({
    player: aboutme,
    mode: 'scroll',
    actions: [
    {
        visibility: [0,1],
        type: 'seek',
        frames: [0, 740],
    },
    ]
});
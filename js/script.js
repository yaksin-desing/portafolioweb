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

mm.add("(max-width:400px)",()=>{
    
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
	return -(racesWidth - window.innerWidth+50);
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
	end: () => `+=${getScrollAmount() * -3}`,
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
        console.log("es visible")
        barramenu.classList.remove("ctive")
        barramenua.classList.remove("ctive")
        verbar = true;

    } else {
        console.log("no visible")
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
        document.querySelector(".cont__logo__nav").style.filter = "invert(100%)";
        document.querySelector(".bars__menu").style.filter = "invert(0%)";

    } else {
        document.querySelector(".cont__logo__nav").style.filter = "invert(100%)";
        document.querySelector(".bars__menu").style.filter = "invert(0%)";

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
    mode: "chain",
    player: "#logo",
    actions: [{
            state: 'autoplay',
            transition: 'onComplete',
            frames: [1, 148],
        },
        {
            type: 'hover',
            frames: [147],
        }
    ]
});

LottieInteractivity.create({
    player: '#animacionhomepersona',
    mode: 'chain',
    actions: [{
            state: 'autoplay',
            frames: [0, 397],
            transition: 'onComplete',
        },
        {
            visibility: [0, 200],
            state: "loop",
            frames: [233, 397]
        }
    ]
});
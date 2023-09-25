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
    actions: [
        {
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


//MENU// 

const iconoMenu = document.querySelector('.icono-menu'),
    menu = document.querySelector('.cont-menu');
iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    const rutaActual = e.target.getAttribute('src');
    if (rutaActual == '../assets/img/menu1.svg' || rutaActual == '../assets/img/menu1.svg') {
        e.target.setAttribute('src', '../assets/img/menu2.svg');
    } else {
        e.target.setAttribute('src', '../assets/img/menu1.svg');
    }
});





let valor = 0;
const nombre = ['doris', 'gato con botas', 'shrek', 'burro', "fiona", "pinocho"];
const cargo = ['Product manager', 'Mantenimiento', 'CEO.META.INC', 'Portero', "Secretaria", "Frontend"];
const testimonio = ['“Es un papucho, su cara parece tallada por los mismo ángeles”', 'Odio los lunes', 'CEO.META.INC', '¡Apuesto a que nunca habías visto a un burro volar!', "Secretaria", "¡Soy un niño de verdad!"];
const resumen = ['Desarrolladora fullstack senior desde hace 9 años, trabaja actualmente para Meta.inc, como directora de proyectos avanzados.',
    'valor2', 'valor3', 'valor4', "valor4", "valor5"
];
const foto = ['../assets/img/avatartestimonio.png',
    '../assets/img/gato.png',
    '../assets/img/shrek.png',
    '../assets/img/burro.png',
    '../assets/img/burro.png',
    '../assets/img/burro.png'
];
document.querySelector("#adelante").addEventListener("click", () => {

    if (valor < 5) {
        valor++
        document.querySelector("#nombre").textContent = nombre[valor]
        document.querySelector("#cargo").textContent = cargo[valor]
        document.querySelector("#testimonio").textContent = testimonio[valor]
        document.querySelector("#resumen").textContent = resumen[valor]
        document.querySelector("#foto").src = foto[valor]


    }
    if (valor == 5) {
        document.querySelector("#adelante").style.filter = "invert(70%)";
        document.querySelector("#atras").style.filter = "invert(0%)";


    } else {
        document.querySelector("#adelante").style.filter = "invert(0%)";
        document.querySelector("#atras").style.filter = "invert(0%)";

    }


})

document.querySelector("#atras").addEventListener("click", () => {
    if (valor > 0) {
        valor--
        document.querySelector("#nombre").textContent = nombre[valor]
        document.querySelector("#cargo").textContent = cargo[valor]
        document.querySelector("#testimonio").textContent = testimonio[valor]
        document.querySelector("#resumen").textContent = resumen[valor]
        document.querySelector("#foto").src = foto[valor]
    }
    if (valor == 0) {
        document.querySelector("#adelante").style.filter = "invert(0%)";
        document.querySelector("#atras").style.filter = "invert(70%)";
    } else {
        document.querySelector("#adelante").style.filter = "invert(0%)";
        document.querySelector("#atras").style.filter = "invert(0%)";
    }
})


let valorenviar = 0;

document.querySelector("#botonenviar").addEventListener("click", () => {

    if (valorenviar == 0) {
        valor++
        document.querySelector("#popup").style.displey = "block";
    }


})
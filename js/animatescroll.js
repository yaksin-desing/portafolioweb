let mini = gsap.matchMedia();



var ini = gsap.timeline({
    repeat: 0,
    repeatDelay: 0,
})



mini.add("(min-width:721px)", () => {



    ini.to("html", {
        overflowY: "hidden",
        overflowX: "hidden",
        duration: 0
    });

    ini.to(".rectangulo", {
        top: "50%",
        duration: 1
    });

    ini.to(".rectangulo", {
        top: "0%",
        duration: 1
    });

    ini.to("html", {
        overflowY: "auto",
        overflowX: "hidden",
        duration: 0
    });

    ini.to(".float__wapp", {
        rotate: "20deg",
        position: "fixed",
        top: "45%",
        left: "75%",
        duration: 1
    });

    ini.to(".cargando__wapp", {
        opacity: 0,
        duration: 0.5
    });

    ini.to(".backfloat__wapp", {
        opacity: 100,
        duration: 0.5
    });

    ini.to(".cont__logo__nav", {
        y: 0,
        duration: 0.5
    });

    ini.to(".icono-menu", {
        y: 0,
        duration: 1
    });

    ini.to(".h_uno", {
        y: 0,
        duration: 0.5
    });

    ini.to(".h_dos", {
        y: 0,
        duration: 0.5
    });

    ini.to(".titulo", {
        overflow: "visible",
        duration: 0
    });

    ini.to(".h_tres", {
        y: 0,
        duration: 0.5
    });

    ini.to(".item_img", {
        y: 0,
        duration: 0.5
    });

    ini.to(".cont_parrafo_contadores", {
        y: 0,
        duration: 0.5
    });

    ini.to(".contador_cont", {
        y: 0,
        duration: 0.5
    });

    ini.to(".grilla", {
        opacity: 100,
        duration: 2
    });


})

mini.add("(max-width:720px)", () => {


    ini.to("html", {
        overflowY: "hidden",
        overflowX: "hidden",
        duration: 0
    });


    ini.to(".rectangulo", {
        top: "70%",
        duration: 1
    });

    ini.to(".rectangulo", {
        top: "0%",
        duration: 2
    });

    ini.to("html", {
        overflowY: "auto",
        overflowX: "hidden",
        duration: 0
    });

    ini.to(".cargando__wapp", {
        opacity: 0,
        duration: 0.5
    });

    ini.to(".float__wapp", {
        rotate: "20deg",
        position: "fixed",
        top: "20%",
        left: "80%",
        duration: 1
    });

    ini.to(".backfloat__wapp", {
        opacity: 100,
        duration: 0.5
    });

    ini.to(".cont__logo__nav", {
        y: 0,
        duration: 0.5
    });

    ini.to(".icono-menu", {
        y: 0,
        duration: 1
    });

    ini.to(".h_uno", {
        y: 0,
        duration: 0.5
    });

    ini.to(".h_dos", {
        y: 0,
        duration: 0.5
    });

    ini.to(".titulo", {
        overflow: "visible",
        duration: 0
    });

    ini.to(".h_tres", {
        y: 0,
        duration: 0.5
    });

    ini.to(".item_img", {
        y: 0,
        duration: 0.5
    });

    ini.to(".cont_parrafo_contadores", {
        y: 0,
        duration: 0.5
    });

    ini.to(".contador_cont", {
        y: 0,
        duration: 0.5
    });

    ini.to(".grilla", {
        opacity: 100,
        duration: 2
    });
})






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

let mm = gsap.matchMedia();

mm.add("(min-width:721px)", () => {


    tl.to(
        boton, {
            rotate: "0deg",
            top: "85%",
            left: "93%",
            duration: 1,
            scale: 0.5
        },
    )

})

mm.add("(max-width:720px)", () => {

    tl.to(
        boton, {
            scale: 0.5,
            rotate: "0deg",
            top: "90%",
            left: "85%",
            duration: 1,
        },
    )
})
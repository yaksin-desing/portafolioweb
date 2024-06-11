const skillss = gsap.timeline({
    scrollTrigger: {
        trigger: ".cont_animacionmiskills_vertical",
        start: 'top top',
        end: '700% top',
        markers: false,
        pin: true,
        scrub: 1,
    }
});

skillss.to("#uno", {
    y: "00vh",
    duration: 100,
});

skillss.to("#dos", {
    y: "00vh",
    duration: 100,
});


skillss.to("#tres", {
    y: "00vh",
    duration: 100,
});

skillss.to("#cuatro", {
    y: "00vh",
    duration: 100,
});



const proyectosuno = gsap.timeline({
    scrollTrigger: {
        trigger: "#cont_proyectos_scrolls",
        start: 'top top',
        end: '400% top',
        markers: true,
        pin: true,
        scrub: 1,
    }
});


proyectosuno.to("#unop", {
    y: "0vh",
    duration: 100,
});

proyectosuno.to("#dosp", {
    y: "0vh",
    duration: 100,
});

proyectosuno.to("#tresp", {
    y: "0vh",
    duration: 100,
});



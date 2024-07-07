const proyectosuno = gsap.timeline({
    scrollTrigger: {
        trigger: "#cont_proyectos_scrolls",
        start: 'top top',
        end: '600% top',
        markers: false,
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
import { GlowParticle } from "./gradientlogic.js";

const Colors = [{
    r: 255,
    g: 184,
    b: 3
}, //amarillo1
{
    r: 250,
    g: 235,
    b: 74
}, //Blanco
{
    r: 255,
    g: 163,
    b: 58
}, //naranja

{
    r: 0,
    g: 209,
    b: 205
}, //azul

{
    r: 255,
    g: 92,
    b: 0
}, //azul





]
const contcanvas = document.querySelector("canvas#canvasindex")
class App {
constructor() {

    this.canvas = document.createElement("canvas");

    contcanvas.appendChild(this.canvas);

    this.ctx = contcanvas.getContext('2d');

    this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;
    this.totalParticles = 10;
    this.particles = [];
    this.maxRadius = 600;
    this.minRadius = 500;

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

}

resize() {
    this.stageWidth = contcanvas.clientWidth;
    this.stageHeight = contcanvas.clientHeight;

    contcanvas.width = this.stageWidth * this.pixelRatio;
    contcanvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.globalCompositeOperation = "saturation";

    this.createParticles();

}

createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalParticles; i++) {
        const iten = new GlowParticle(
            Math.random() * this.stageWidth,
            Math.random() * this.stageHeight,
            Math.random() * (this.maxRadius - this.minRadius) + this.minRadius, Colors[curColor]
        );

        if (++curColor >= Colors.length) {
            curColor = 0;
        }

        this.particles[i] = iten;
    }
}
animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalParticles; i++) {
        const iten = this.particles[i];
        iten.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
}
}


window.onload = () => {
new App();
}
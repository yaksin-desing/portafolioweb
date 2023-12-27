import { GlowParticle } from "./gradientlogic.js";

const Colors = [{
    r: 45,
    g: 74,
    b: 227
}, //blue
{
    r: 250,
    g: 255,
    b: 89
}, //amarillo
{
    r: 255,
    g: 104,
    b: 248
}, //purpura
{
    r: 44,
    g: 209,
    b: 252
}, //Azul claro
{
    r: 54,
    g: 233,
    b: 84
}, //verde
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
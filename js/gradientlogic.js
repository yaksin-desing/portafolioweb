const PI2 = Math.PI *2;

export class GlowParticle {
    constructor(x,y, radius, rgb){
        this.x= x;
        this.y= y;
        this.radius= radius;
        this.rgb= rgb;

        this.VX = Math.random() * 4;
        this.vy = Math.random() * 4;

        this.sinValue= Math.random();
    }

    animate(ctx, stageWidth,stageHeight){
        this.sinValue += 0.5;

        this.radius += Math.sin(this.sinValue);

        this.x += this.VX;
        this.y += this.vy;

        if (this.x <0) {
            this.VX *= -1;
            this.x += 10;
        }else if (this.x > stageWidth){
            this.VX *= -1;
            this.x -= 10;
        }

        if (this.y <0) {
            this.vy *= -1;
            this.y += 10;
        }else if (this.y > stageHeight){
            this.vy *= -1;
            this.y -= 10;
        }

        ctx.beginPath();
        const g=ctx.createRadialGradient(
            this.x,
            this.y,
            this.radius * 0.05,
            this.x,
            this.y,
            this.radius
        );
        g.addColorStop(0,`rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`)
        g.addColorStop(1,`rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`)
        ctx.fillStyle = g;
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fill();
    }
}


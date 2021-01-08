class Ball {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.8,
            frictionAir: 0.005,
            density: 1
        }
        this.body = Bodies.circle(x, y, radius / 2, options)
        World.add(world, this.body)
        this.radius = radius

    }

    display() {
        push();
        ellipseMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("yellow")
        ellipse(0, 0, this.radius, this.radius)
        pop();
    }
}


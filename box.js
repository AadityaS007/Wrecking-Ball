class Box {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            friction: 1.2,
            density: 0.04
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
        this.width = width
        this.height = height

    }

    display() {
        push();
        rectMode(CENTER)
        translate(this.body.position.x, this.body.position.y,);
        rotate(this.body.angle);
        stroke("green")
        strokeWeight(4)
        fill("grey")
        rect(0, 0, this.width, this.height)
        pop();
    }
}
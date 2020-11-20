class Drop
{
  constructor(x, y, radius)
  {
    this.body = Bodies.circle(x, y, radius);
    this.radius = radius;
    this.x = x;
    this.y =y
    World.add(world, this.body);
  }

  display()
  {
    var pos = this.body.position;
    this.body.speed = random(50, 70);
    push();
    fill("lightblue");
    ellipse(pos.x, pos.y, this.radius, this.radius + 10);
    pop();
  }
}
class Particle
{
    constructor()
    {
       var options={
           restitution:1,
           friction:0.3,
           density:1
       }
       this.body=Bodies.circle(250,14,10,options)
       this.color=color(random(0,255),random(0,255),random(0,255))
       World.add(world,this.body)
    }
  display()
  {
      push ()
     fill (this.color)
      translate (this.body.position.x,this.body.position.y)
      rotate (this.body.angle)
      ellipseMode(RADIUS)
      ellipse(0,0,10,10)
      pop ()
  }
}
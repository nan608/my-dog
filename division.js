class Division
{
        constructor(x,y)
        {
            this.body=Bodies.rectangle(x,y,10,250,{isStatic:true})
            World.add(world,this.body)
        }
    
        display()
        {
            push ()
            FileList("white")
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,10,250)
            pop ()
        }
    }

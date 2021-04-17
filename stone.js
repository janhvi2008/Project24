class stone{
	constructor(x,y,w,h)
	{
	var options={
		density :12,
		friction:0.9,
		restitution:0.8
	}
		
		this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;
            var angle= this.body.angle;		
			push()
			translate(pos.x, pos.y);
            rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.w,this.h)
			pop()
	}

}
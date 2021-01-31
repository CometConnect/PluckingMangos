class MANGO
{
    constructor( x , y , width , height )
    {
        var options=
        {
            'isStatic' : true
        }
        this.body = Bodies.rectangle( x , y , width , height , options );
        this.width = width;
        this.height = height;
        this.image = loadImage("IMG/mango.png");
        World.add( world , this.body );
    }
    display( color )
    {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate( pos.x , pos.y );
        rotate( angle );
        fill( color );
        imageMode( CENTER );
        image( this.image , 0 , 0 , this.width , this.height );
        //rectMode( CENTER );
        //rect( 0 , 0 , this.width , this.height );
        pop();
    }
}
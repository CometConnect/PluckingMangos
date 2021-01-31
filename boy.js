class BOY
{
    constructor( x , y , width , height )
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("IMG/boy.png")
    }
    display( color )
    {
        push();
        fill( color );
        //rectMode( CENTER );
        //rect( this.x , this.y , this.width , this.height );
        imageMode( CENTER );
        image( this.image , this.x , this.y , this.width , this.height );
        pop();
    }
}
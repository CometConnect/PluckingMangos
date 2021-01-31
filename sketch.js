const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree , stone , ground , boy , sling ;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango6 , mango7 , mango8;
var mangoIMG , stoneIMG , treeIMG , boyIMG ;

function preload()
{
	//mangoIMG = loadImage("IMG/mango.png");
	//stoneIMG = loadImage("IMG/stone.png");
	//treeIMG = loadImage("IMG/tree.png");
	//boyIMG = loadImage("IMG/boy.png");
}

function setup()
{

	createCanvas( 1280 , 680 );

	engine = Engine.create();
	world = engine.world;

	stone = new STONE( 300 , 400 , 20 , 20 );
	sling = new SLING( stone.body , { x : 250 , y : 400 } );
	tree = new TREE( 1100 , 410 , 240 , 420 );
	boy = new BOY( 300 , 500 , 200 , 300 );
	mango1 = new MANGO( 1000 , 330 , 20 , 20 );
	mango2 = new MANGO( 1050 , 280 , 20 , 20 );
	mango3 = new MANGO( 1100 , 280 , 20 , 20 );
	mango4 = new MANGO( 1150 , 280 , 20 , 20 );
	mango5 = new MANGO( 1200 , 380 , 20 , 20 );
	mango6 = new MANGO( 1000 , 380 , 20 , 20 );
	mango7 = new MANGO( 1050 , 330 , 20 , 20 );
	mango8 = new MANGO( 1100 , 330 , 20 , 20 );
	ground = new GROUND( 1280/2 , 640 , 1280 , 50 );
	Engine.run(engine);
  
}


function draw()
{
  	background("yellow");
  	tree.display("orange");
  	boy.display("blue");
  	stone.display("red");
	mango1.display("black");
	mango2.display("black");
	mango3.display("black");
	mango4.display("black");
	mango5.display("black");
	mango6.display("black");
	mango7.display("black");
	mango8.display("black");  
	ground.display("green");
	if( Matter.SAT.collides( mango1.body , stone.body ).collided===true )
	{
		Body.setStatic( mango1.body , false );
	}
	if( Matter.SAT.collides( mango2.body , stone.body ).collided===true )
	{
		Body.setStatic( mango2.body , false );
	}
	if( Matter.SAT.collides( mango3.body , stone.body ).collided===true )
	{
		Body.setStatic( mango3.body , false );
	}
	if( Matter.SAT.collides( mango4.body , stone.body ).collided===true )
	{
		Body.setStatic( mango4.body , false );
	}
	if( Matter.SAT.collides( mango5.body , stone.body ).collided===true )
	{
		Body.setStatic( mango5.body , false );
	}
	if( Matter.SAT.collides( mango6.body , stone.body ).collided===true )
	{
		Body.setStatic( mango6.body , false );
	}
	if( Matter.SAT.collides( mango7.body , stone.body ).collided===true )
	{
		Body.setStatic( mango7.body , false );
	}
	if( Matter.SAT.collides( mango8.body , stone.body ).collided===true )
	{
		Body.setStatic( mango8.body , false );
	}
}
function mouseDragged()
{
    Body.setPosition( stone.body, { x : mouseX , y : mouseY });
}
function mouseReleased()
{
    sling.fly();
}
function keyPressed()
{
    if(keyCode === 32){
        Body.setPosition( stone.body , { x : 300 , y : 470 } );
        sling.attach(stone.body);
    }
}
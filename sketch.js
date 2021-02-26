var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    //create 4 different surfaces

    surface1 = createSprite(550,493,100,10);
    surface1.velocityX=0;
    surface1.velocityY=0;
    surface1.shapeColor="maroon";
    

    surface2 = createSprite(400,493,100,10); 
    surface2.velocityX=0;
    surface2.velocityY=0;
    surface2.shapeColor="blue";

    surface3 = createSprite(250,493,100,10) ;
    surface3.velocityX=0;
    surface3.velocityY=0;
    surface3.shapeColor="orange";

    surface4 = createSprite(100,493,100,10); 
    surface4.velocityX=0;
    surface4.velocityY=0;
    surface4.shapeColor="green";


    //create box sprite and give velocity

    box=createSprite(random(20,750),479,20,20);
    box.shapeColor="white";
    box.velocityX=-2;
    box.velocityY=0;

   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.collide(edges);
    
    if(surface1||surface2||surface3.isTouching(box)){
    }
    //add condition to check if box touching surface and make it box
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="green";
        box.velocityX=0;
        
    }

   

    drawSprites();
}

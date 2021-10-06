var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,400,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,400,30);
    block2.shapeColor = "orange";

    
    block3 = createSprite(495,580,400,30);
    block3.shapeColor = "red";

    
    block4 = createSprite(395,580,400,30);
    block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocity.x= 4;
    ball.velocity.y= -4;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        
        
    
    }

    //write code to bounce off ball from the block3

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
    }
    //write code to bounce off ball from the block4

    if(block4.isTouching(ball)){
        ball.shapeColor = "green";
    }
    drawSprites();
    }
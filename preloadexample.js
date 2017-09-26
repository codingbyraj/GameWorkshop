var c, song, img1,myPlayer, value=0, rect,rectangles = [];
var wallImg, chakra, score = 0, gameOver = 0;
function preload(){
    chakra = loadGif('images/giphy.gif')
    song = loadSound('assets/hit.wav');
    img1 = loadImage('images/mycar.PNG');
    wallImg = loadImage('images/wall.jpg');
}

function setup() {
  
  c = createCanvas(600, 600);
  c.parent("demo");
//  background(255,0,0);
   for(var i=0;i<10;i++){
       rectangles.push(new Rect(random(600),random(600)));
       
   }
}

function draw(){
    background(wallImg);
    textSize(40);
    fill('white');
    if(gameOver == 1)
    {
        text("Game Over", 200,300);
        noLoop();
    }
    fill('white');
    text("Score: "+score,400,40);
    fill('blue');
    rectMode(CENTER);
//  myPlayer = image(chakra,mouseX,mouseY,50,50);
    myPlayer = ellipse(mouseX,mouseY,50,50);
    myPlayerMove();
    //fill('white');    
    //textSize(20);
    //text("value is "+value,150,150);    
    //image(img1,100,100, 50,50);    
    
    checkCollision();
    printRects();
    isGameOver();
    
}
function isGameOver(){
    if(rectangles.length == 0){
        gameOver = 1;
        
    }
}

function myPlayerMove(){
    
}

function checkCollision(){
    for(var i = 0;i < rectangles.length;i++){
     if(dist(mouseX,mouseY,rectangles[i].x,rectangles[i].y)<=50)   
     {rectangles.splice(i,1);
     //   console.log("true");
        song.play();
      score++;
    }
    }
}

function printRects(){
    for(var i=0;i<rectangles.length;i++){

        rectangles[i].print();
        rectangles[i].move();
    }
}
//function mousePressed() {
//  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//    song.stop();
//    background(255,0,0);
//  } else {
//    song.play();
//    background(0,255,0);
//  }
//}
//

function keyPressed() {
    console.log("key pressed is: " + keyCode);
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}


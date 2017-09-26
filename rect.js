var speed = 3;
function Rect(x, y){
    this.x = x;
    this.y = y;
    this.h = 50;
    this.w = 50;
    this.xVelocity = speed;
    this.yVelocity = speed;
    
    this.print = function(){
        fill('red');
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
    
    this.move = function(){
        
        if(this.x < 25){
            this.xVelocity = random(speed)+1;
        }
        else 
        if(this.x > 600-25){
            this.xVelocity= random(-speed)-1;
        }
        else
        if(this.y < 25){
            this.yVelocity = random(speed)+1;
        }
        else if(this.y > 600-25){
            this.yVelocity = random(-speed)-1;
        }
        
        
        
        
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
}
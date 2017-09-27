function Fruit(img){
    this.x=500;
    this.y=420;
    this.h=30;
    this.w=30;
    this.fruitImg=img;
    this.printFruit=function(){
        image(this.fruitImg,this.x,this.y,this.w,this.h);
    }
    this.move=function(){
        this.x-=2;
    }
}
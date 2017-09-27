function Tree(img){
    this.x = 550;
    this.y = 350;
    this.h = 100;
    this.w = 100;
    this.img = img;
    
    
    
    
    this.printTrees=function(){
        image(this.img, this.x, this.y, this.w, this.h);
    }
    
    this.move = function(){
        this.x -= 2;
    }
}
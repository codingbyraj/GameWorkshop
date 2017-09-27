function Player(img)
{
    this.h=50;
    this.w=40;
    this.x=50;
    this.y=400;
    this.img=img;
    this.playerImg=function()
    {
        image(this.img,this.x,this.y,this.w,this.h);
        
        
    }
    
}
    
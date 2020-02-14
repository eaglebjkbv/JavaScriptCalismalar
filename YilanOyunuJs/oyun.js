class YilanOyunu{

    constructor(){
        this.canvas=document.getElementById('canvas');
        this.ctx=this.canvas.getContext('2d');
    
        document.addEventListener('keydown',this.onKeypress.bind(this));
    }

    init(){
        this.posX=this.posY=250;
        this.yemX=this.yemY=5;
        this.boxH=this.boxW=10;
        this.numberOfBoxes=5;
        this.boxes=[];
        this.yonX=0;
        this.yonY=0;


        this.timer=setInterval(this.loop.bind(this),1000/15);
    }

    onKeypress(e){
        
        // Sol ok Tusu:37
        if(e.keyCode===37){
            this.yonX=-1;
            this.yonY=0;
            console.log("Sol Tuşa Basıldı")
        }
        //Sag ok Tusu:39
        if(e.keyCode===39){
            this.yonX=1;
            this.yonY=0;
        }
        //yukarı ok Tusu:38
        if(e.keyCode===38){
            this.yonX=0;
            this.yonY=-1;
        }

        //Asagi ok tuşu :40;
        if(e.keyCode===40){
            this.yonX=0;
            this.yonY=1;
        }
    }

    loop(){
        this.update();

        this.draw();
    }

    update(){
            this.posX+=(this.yonX*10);
            this.posY+=(this.yonY*10);

            if(this.posX<0) this.posX=500;
            if(this.posX>500) this.posX=0;
            if(this.posY<0) this.posY=500;
            if(this.posY>500) this.posY=0;

    }
    draw(){
        this.ctx.fillStyle='black';
        this.ctx.fillRect(0,0,this.canvas.clientWidth,this.canvas.height);
        

        this.ctx.fillStyle='yellow';
        this.ctx.fillRect(this.posX,this.posY,this.boxW,this.boxH);
        

    }




}

const game=new YilanOyunu();

window.onload=()=>game.init();



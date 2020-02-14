class deneme
{
    constructor(){
        this.canvas=document.getElementById("canvas");
        this.cxt=this.canvas.getContext("2d");

    }
    merhabaDe(){
        
        
        this.cxt.fillStyle='black';
        this.cxt.fillRect(0,0,this.canvas.width,this.canvas.heigth);

    }
}



dene=new deneme();

dene.merhabaDe();
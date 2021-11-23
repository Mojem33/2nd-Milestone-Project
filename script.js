const canvas=document.getElementById("canvas1");
const ctx=canvas.getContext("2d");
canvas.width=800;
canvas.height=500;

let score=0;
let gameFrame=0;
ctx.font=  50 px serif;
let canvasPosition=canvas.getBoundingClientRect();
const pointer={
    x: canvas.width/2
    y: canvas.height/2
    click:false
    pointer.click=true
}
canvas.addEventListner('pointerdown', function(event)){
    pointer.x=event.x-canvasPosition.left;
    pointer.y=event.y-canvasPosition.top;
}
canvas.addEventListener('pointerup' function(event)){
    pointer.click=false;
}
Class Player{
    const PlayerLeft=new Image();
    PlayerLeft.src='plane.right.png';
    const PlayerRight=new Image();
    PlayerRight.src='plane.left.png';
    constructor(){
        this.x=canvas.width/2
        this.y=canvas.height/2
        this.radius=50;
        this.angle=0;
        this.frameX=0;
        this.frameY=0;
        this.spriteWidth=817;
        this.spriteHeight=483;
    }
    update()
    {
        const dx=this.x-pointer.x;
        const dy=this.y-pointer.y;
        let theta= Math.atan2(dy,dx);
        this.angle=theta;
    }
    if (pointer.x!=this.x){
        this.x-=dx/25;
    }
    if (pointer.y !=this.y){
        this.y=dy/25;
    }
    draw()
    {
        if (pointer.click){
            ctx.lineWidth=0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
        }
        ctx.fillstyle='gold';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(this.x, this.y, this.radius, 10);
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        if(this.x>=pointer.x){
            ctx.drawImage(playerRight, this.frameX*this.spriteWidth, this.frameY*this.spriteHeight, 0-60, 0-45,this.spriteWith/4, this.spriteHeight/4);
            
        }
        if (else){
            ctx.drawImage(playerLeft, this.frameX*this.spriteWidth, this.frameY*this.spriteHeight, 0-60, 0-45,this.spriteWith/4, this.spriteHeight/4);

        }
        ctx.restore();
        const player= new Player();
    }
    constcircleArray=[];
    class Circle{
        const Circle=New Image();
    Circle.src='black.bird.png';
        constructor(){
            this.x=Math.random()*canvas.width;
            this.y=canvas.Height+100+Math.random()*canvas.height;
            this.radius=50;
            this.speed=Math.random()+5+1;
            this.distance;
            this.counted=false;
            this.sound=Math.random()<=0.5?'sound1', 'sound2';
        }
        update()
        {
            this.y-=this.speed;
            const dx=this.x-player.x;
            const dy=this.y-player.y;
            this.distance=Math.sqrt(dx*dx+ dy*dy)
        }
        draw()
        {
            ctx.fillstyle='blue';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }
    }
        constcirclePop1=document.createElement('audio');
    circlePop1.src='SHOOT011.mp3';
    constcirclePop2=document.createElement('audio');
    circlePop2.src='SHOOT012.mp3';

}
function handleBubbles(){
    if(gamrFrame %50==0){
        circlesarray.push(newCircle());
    }
    for(let i=0; i<circlesArray.lenght, i++){
        circlesarray[i].update(); circles.radius*2
        circlesArray[i].draw();
    }
    for(let i=0; i<circlesArray.lenght; i++){
        if(circlesArray[i].y<0){
            circlesArray.slice(i,1);
        }
    }if(circlesArray[i].distance<circlesArray[i].radius+player.radius){
        (console.log('collision'));
    }
}
if(!circlesArray[i].sound=='sound'){
    circlePop1.play();

   if (else){
    
        circlePop2.play();
    }
    if(circlessArray[i].counted){
        score++;
        circlessArray[i].counted=true;
        circles.splice(i,1);
    }
}
function animate(){
    ctx.clearRect(0,0,canvas.Width, canvas.Height);
    player.update();
    player.draw()
    ctx.fillStyle='brown';
    ctx.fillText('score:'+score, 10,50);
    gameFrame++;
    requestAnimationFrame(animate);
}

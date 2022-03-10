let img

function preload() {
  
  img = loadImage('bg.jpg');
  player_img=loadImage('sprite3.png');
}

class Game{
  constructor(){
    this.platforms=[]
    this.gaps=[]
    this.widths=[]
    this.stick=false
    this.platforms_moving=false
    this.state=0
    this.score=0
    for (let g=4;g<81;g++){
      this.gaps.push(g*5)
    }
    
    for (let w=4;w<21;w++){
      this.widths.push(w*5)
    }
    
    let x=0
    for (let i=0;i<2;i++){
      let gap=random(this.gaps)
      this.create_platform(x)
      x=x+this.platforms[this.platforms.length-1].w+gap
    }
    this.player=new Player(this.platforms[0].x+this.platforms[0].w,this.platforms[0].y)
  }
  
  display_score(){
    noStroke()
    fill(225, 173, 1)
    rect(width-108,10,90,28)
    textSize(20)
    fill(255)
    text('Score: '+this.score,width-100,30)
    stroke(0)
  }
  
  state_manager(){
    if (this.state===1){
      this.create_stick()
      this.stick.grow()
    }
    
    else if (this.state===2){
      this.stick.rotate()  
    }
    
    else if (this.state===3){
      this.player.set_destination()  
    }
    
     else if (this.state===4){
      this.player.update()    
    }
    
    else if (this.state===5){
      this.set_platforms_destination()
    }
    
    else if (this.state===6){
      for (var i =0;i<this.platforms.length;i++){
        this.platforms[i].update()
      this.player.stick_to_platform()
      }
    }
  
  }
  
  create_platform(x){
    let w=random(this.widths)
    let y=height-150
    let h=150
    this.platforms.push(new Platform(x,y,w,h))
  }
  
  update(){
    if (this.platforms[0].x<=-this.platforms[0].w){
      this.platforms.shift()
    }
    
  }
  
  set_platforms_destination(){
    this.create_platform(width)
  this.platforms[0].destination_x=-this.platforms[0].width
      this.platforms[1].destination_x=0
          this.platforms[2].destination_x=this.platforms[1].w+random(this.gaps)
    //this.player.destination_x=this.platforms[1].destination_x+this.platforms[1].w-10
    
    game.state=6
  }
  
  create_stick(){
    if (!this.stick){
    this.stick=new Stick(this.platforms[0].x+this.platforms[0].w,this.platforms[0].y,3,0)
  }}
  
  
  display(){   
    background(img,0)
    //tint(255,10)
    //image(img,0,0,width,height)
    this.display_score()
    this.state_manager()
    for (let j=0;j<this.platforms.length;j++){
      this.platforms[j].display()
    this.player.display()
    if (this.stick!=false){
      this.stick.display()
    }
      
  }
    
  }
}


class Player{
  constructor(x,y){
    this.w=30
    this.h=50
    this.x=x-this.w
    this.destination_x=x
    this.v=5
    this.y=y-this.h
    this.position=0
  }
  
  set_destination(){
    if (game.stick.x_2>=game.platforms[1].x && game.stick.x_2<=game.platforms[1].x+game.platforms[1].w){
        this.destination_x=game.platforms[1].x+game.platforms[1].w-this.w
      game.score+=1
      game.state=4
      }
      else{
      this.destination_x=game.stick.x_2
      game.state=8
      }
    }
  
  stick_to_platform(){
    if (game.platforms.length===2){
      this.x=game.platforms[0].x+game.platforms[0].w-this.w
      if (game.platforms[0].x===0){
        game.state=0
      }
    }
    else{
      this.x=game.platforms[1].x+game.platforms[1].w-this.w
      if (game.platforms[1].x===0){
        game.state=0
    }
  }
  }
  
  update(){
    if (this.x<this.destination_x){
      this.x+=this.v
      this.position=(this.position+1)%7
    }
    else if (this.x>this.destination_x){
      this.x-=this.v
    }
    
    else if (this.x==this.destination_x && this.x>game.platforms[0].x+game.platforms[0].w){
      game.stick=false
      game.state=5
      
      }
    }
  
  
 
  display(){
    let c=player_img.get(this.position*108,0,108,120)
    image(c,this.x,this.y,this.w,this.h)
  }
}

class Platform{
  constructor(x,y,w,h){
    this.x=x
    this.destination_x=x
    this.y=y
    this.w=w
    this.h=h
    this.v=5
  }
  update(){
    if (this.x!=this.destination_x){
      this.x=this.x-this.v
    }
  }
  display(){
    noStroke()
    fill(color('#6d4a3b'))
    rect(this.x,this.y,this.w,this.h)
    stroke(0)
  }
  
}

class Stick{
  constructor(x,y,w,h){
    this.l=h
    this.x_1=x
    this.y_1=y
    this.x_2=x
    this.y_2=this.y_1+this.l
    this.angle=PI/2
  }
  
  grow(){
    this.y_2-=5
    this.l+=5     
  }
  
  rotate(){
    this.angle-=PI/64
    this.x_2=this.x_1+this.l*cos(this.angle)
    this.y_2=game.platforms[0].y-this.l*sin(this.angle)
    
    if (this.angle<=0){
      game.state=3
    }
    }
    
      
  
  display(){
    strokeWeight(2)
    line(this.x_1,this.y_1,this.x_2,this.y_2)
    strokeWeight(1)
  }
}

function setup() {
  createCanvas(550, 450);
  game=new Game()
}


function draw() {
  game.update()
  game.display()
  
}

/*function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    
}*/


function mousePressed(){
  if (game.state==0){
  game.state=1
  }
}

function mouseReleased(){
  if (game.state===1){
  game.state=2
  }
  
}

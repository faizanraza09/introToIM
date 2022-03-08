class Game{
  constructor(){
    this.platforms=[]
    this.gaps=[]
    this.widths=[]
    this.stick=false
    this.platforms_moving=false
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
    this.player=new Player(this.platforms[0].x+this.platforms[0].w-10,this.platforms[0].y-10)
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
  
  move_platforms(){
    if (this.platforms_moving==false){
    this.create_platform(width)
  this.platforms[0].destination_x=-this.platforms[0].width
      this.platforms[1].destination_x=0
          this.platforms[2].destination_x=this.platforms[1].w+random(this.gaps)
    this.player.destination_x=this.platforms[1].destination_x
      this.platforms_moving=true
  }}
  
  create_stick(){
    this.stick=new Stick(this.platforms[0].x+this.platforms[0].w,this.platforms[0].y,3,0)
    this.stick.grow=true
  }
  
  
  display(){
    background(color('#87ceeb'))
    for (let j=0;j<this.platforms.length;j++){
      this.platforms[j].update()
      this.platforms[j].display()
    this.player.move()
    this.player.display()
    if (this.stick!=false){
      this.stick.update()
      this.stick.display()
    }
      
  }
    
  }
}


class Player{
  constructor(x,y){
    this.w=10
    this.x=x
    this.destination_x=x
    this.v=5
    this.y=y
    this.moving=false
    this.moved=false
  }
  
  move(){
    this.update()
    if (this.moving===true){
      if (game.stick.x_2>=game.platforms[1].x && game.stick.x_2<=game.platforms[1].x+game.platforms[1].w-10){
        this.destination_x=game.platforms[1].x+game.platforms[1].w-10
      }
      else{
      this.destination_x=game.stick.x_2
      }
    }
  }
  update(){
    if (this.x<this.destination_x){
      this.x+=this.v
    }
    else if (this.x>this.destination_x){
      this.x-=this.v
    }
    
    else if (this.x==this.destination_x && this.x>game.platforms[0].x+game.platforms[0].w){
      game.stick=false
      game.move_platforms()
      
      }
    }
  
  
 
  display(){
    fill(255,0,0)
    rect(this.x,this.y,this.w)
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
    fill(0)
    rect(this.x,this.y,this.w,this.h)
  }
  
}

class Stick{
  constructor(x,y,w,h){
    this.l=h
    this.x_1=x
    this.y_1=y
    this.x_2=x
    this.y_2=this.y_1+this.l
    this.grow=false
    this.rotation=false
    this.angle=PI/2
  }
  
  update(){
    if (this.grow===true){
      this.y_2-=5
      this.l+=5     
    }
    if (this.rotation===true && this.angle>0){
      this.angle-=PI/64
      this.x_2=this.x_1+this.l*cos(this.angle)
      this.y_2=game.platforms[0].y-this.l*sin(this.angle)
    }
    
    else if (this.angle<=0){
      this.rotation=false
      game.player.moving=true
  }
      
    }
  
  display(){
    line(this.x_1,this.y_1,this.x_2,this.y_2)
  }
}

function setup() {
  createCanvas(600, 450);
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
  game.create_stick()
}

function mouseReleased(){
  game.stick.grow=false
  game.stick.rotation=true
  
  
}

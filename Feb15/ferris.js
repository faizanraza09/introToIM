//initializing variables
let cabins=[]
let dia=300

function setup() {
  createCanvas(400, 400);
  background(0, 191, 255)
  
  //creating cabins and putting them into an array
  let angles=[PI/4,PI/2,3*PI/4,PI,5*PI/4,3*PI/2,7*PI/4,2*PI]
  for (var i =0;i<angles.length;i++){
    cabins.push(new Cabin(angles[i]))
  }
  strokeWeight(3)
  
}

function draw() {
  background(0, 191, 255)
  //sun
  fill(249,215,28)
  noStroke()
  circle(40,40,50)
  //resetting the parameters
  stroke(0)
  strokeWeight(3)
  noFill()
  //inner and outer circles
  circle(width/2,height/2,dia)
  circle(width/2,height/2,50)
  
  //displaying the cabins
  for (var j=0;j<cabins.length;j++){
    cabins[j].angle=cabins[j].angle+0.01
    cabins[j].display() 
  }
}

//A cabin class is made which takes in angle as a parameter and then displays a cabin at a certain angle with a random colour
class Cabin {
  constructor (angle){
    this.angle=angle
    this.r=random(255)
    this.g=random(255)
    this.b=random(255)
  }
  
  display(){
    //x and y coordinates of the cabin according to the angle they are at
    this.x= 200+dia/2*cos(this.angle)
    this.y=200-dia/2*sin(this.angle)  
    line(200,200,this.x,this.y)
    //making the line connecting the cabin to the center
    fill(this.r,this.g,this.b)
    //making the cabin
    rect(this.x-25,this.y,50,30)
    noFill(255)
    
  }
}

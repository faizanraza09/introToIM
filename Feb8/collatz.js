// declaring an array to save the path of all numbers
let main= []
function setup() {
  // setting initial parameters
  createCanvas(1200, 1200)
  background(255)
  strokeWeight(3)
  stroke(255,144,216,20)
  
  
  // this loop saves the respective sequence of numbers into the main numbers
  for (var i=2;i<10000;i++){  
    let n=i
    seq=[]
    while (n!=1){
      seq.push(n)
      n=collatz(n)      
      }
    seq.push(1)
    seq.reverse()
    main.push(seq)
    }
  }

//setting initial counter
let x=0
function draw() {
  // resets all the rotations and translations
  resetMatrix()
  
  // sets the starting point of the art to be at the two thirds of the canvas and from the left
  translate(0,1*height/3)
  
  // loops through the array and draws lines anticlockwise or clockwise based on if the number is odd or even
  for (var y = 0; y<main[x].length; y++){
      num=main[x][y]
      if (num%2==0){
        rotate(-PI/30)     
        }
      else{
        rotate(PI/30)
        }
      
      line(0,0,10,0)
      translate(10,0)
      
      }
  x+=1
      
  
}

// function to return the next number according to the collatz conjecture
function collatz(n){
  if (n%2==0){
    return n/2
    }
  else{
    return (3*n+1)/2
    }
  }

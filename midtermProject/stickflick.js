/*
  Name: Faizan Raza
  Project: Stick Flick
  Class: Introduction to Interactive Media
  Date: 2nd March 2022
*/

// Declaring variables globally so can use them throughout the program
let bg_img;
let player_img;
let success;
let failure;

// Preloading the images and the sounds
function preload() {
  bg_img = loadImage("bg.jpg");
  player_img = loadImage("sprite3.png");
  success = loadSound("success-sound-effect.mp3");
  failure = loadSound("failure.mp3");
}

// Declaring the game class which encompasses all the elements of the game
class Game {
  // The constructor function to declare initial variables and set up the game
  constructor() {
    this.platforms = [];
    this.gaps = [];
    this.widths = [];
    this.stick = false;
    this.state = 0;
    this.score = 0;
    this.start_x = 225;
    this.start_y = 365;
    this.start_w = 100;
    this.start_h = 30;

    // Making an array of all the possible gap lengths between platforms
    for (let g = 4; g < 61; g++) {
      this.gaps.push(g * 5);
    }

    // Making an array of all the possible widths of the platforms
    for (let w = 8; w < 31; w++) {
      this.widths.push(w * 5);
    }

    // Making the initial two platforms
    let x = 0;
    for (let i = 0; i < 2; i++) {
      let gap = random(this.gaps);
      this.create_platform(x);
      x = x + this.platforms[this.platforms.length - 1].w + gap;
    }

    // Making the player
    this.player = new Player(
      this.platforms[0].x + this.platforms[0].w,
      this.platforms[0].y
    );
  }

  // A function to display the initial instruction screen
  display_instructions() {
    textSize(50);
    fill(0);
    text("Stick Flick", 165, 70);
    fill(255);
    rect(125, 100, 300, 300);
    fill(0);
    textSize(30);
    text("Instructions", 200, 140);
    textSize(15);
    text("- Hold down the mouse to create a stick", 140, 170);
    text("and grow it", 140, 190);
    text("- Release the stick when you think the", 140, 230);
    text("stick is long enough to reach the platform", 140, 250);
    text("and not long enough that it crosses it", 140, 270);
    text("- Reaching the platform would increase ", 140, 310);
    text("the score by 1 and failing to reach it will", 140, 330);
    text("finish the game", 140, 350);
    fill(225, 173, 1);
    noStroke();
    rect(this.start_x, this.start_y, this.start_w, this.start_h);
    fill(255);
    textSize(20);
    text("Start", 252, 385);
  }

  // Function to check if the player is clicking the start button on the intial start screen
  check_start() {
    if (
      mouseX >= this.start_x &&
      mouseX <= this.start_x + this.start_w &&
      mouseY >= this.start_y &&
      mouseY <= this.start_y + this.start_h
    ) {
      this.state = 1;
    }
  }

  // Function to display the score
  display_score() {
    noStroke();
    fill(225, 173, 1);
    rect(width - 115, 10, 107, 28);
    textSize(20);
    fill(255);
    text("Score: " + this.score, width - 100, 30);
    stroke(0);
  }

  // Function to remove platform if its moved out of screen
  remove_platform() {
    if (this.platforms[0].x <= -this.platforms[0].w) {
      this.platforms.shift();
    }
  }

  // Function to check if the game is over
  check_game_over() {
    if (this.state === 8 && this.player.x === this.player.destination_x) {
      failure.play();
      this.state = 9;
    }
  }

  // Function to display the game over screen
  display_game_over() {
    textSize(50);
    fill(0);
    text("Game Over", 150, 200);
    textSize(40);
    text("Your Score was " + game.score, 120, 270);
    textSize(30);
    text("Click anywhere to Restart", 105, 330);
  }

  // Function to do actions according to the state of the game
  state_manager() {
    /*
      State 0 = Game Instruction Screen
      State 1 = Stationary Player Standing on the Initial Stationary Platforms
      State 2 = Detects mouse click and grows the stick
      State 3 = Detects Mouse Release and rotates the stick
      State 4 = As the stick has finished rotating program checks if player reached the platform or not and proceeds to state 5 or state 8 subsequently.
      State 5 = The player moves towards his destination
      State 6 = When the player reaches the platform, the program determines the new position of the platforms and subsequently the player
      State 7 = The platforms and the player start moving towards their destination
      State 8 = The player moves towards the end of the stick and the program keeps checking if the player reached the end of the stick
      State 9 = As soon as the player reaches the end of the stick thats not on the platform, the game is over and the game over screen is displayed.
    */
    if (this.state === 0) {
      this.display_instructions();
    } else if (this.state === 2) {
      this.create_stick();
      this.stick.grow();
    } else if (this.state === 3) {
      this.stick.rotate();
    } else if (this.state === 4) {
      this.player.set_destination();
    } else if (this.state === 5) {
      this.player.move();
    } else if (this.state === 6) {
      this.set_platforms_destination();
    } else if (this.state === 7) {
      for (var i = 0; i < this.platforms.length; i++) {
        this.platforms[i].move();
        this.player.stick_to_platform();
      }
      this.remove_platform();
    } else if (this.state === 8) {
      this.player.move();
      this.check_game_over();
    } else if (this.state === 9) {
      this.display_game_over();
    }
  }

  // Creates a platform at a given x coordinate
  create_platform(x) {
    let w = random(this.widths);
    let h = 100;
    let y = height - h;
    this.platforms.push(new Platform(x, y, w, h));
  }

  // Sets the destination of the platforms so that they can move leftwards
  set_platforms_destination() {
    this.create_platform(width);
    this.platforms[0].destination_x = -this.platforms[0].width;
    this.platforms[1].destination_x = 0;
    this.platforms[2].destination_x = this.platforms[1].w + random(this.gaps);
    game.state = 7;
  }

  // Create the stick following the mouse click
  create_stick() {
    if (!this.stick) {
      this.stick = new Stick(
        this.platforms[0].x + this.platforms[0].w,
        this.platforms[0].y,
        3,
        0
      );
    }
  }

  // Display all the elements of the game according to the state of the game
  display() {
    background(bg_img, 0);
    this.state_manager();
    if (game.state != 9 && game.state != 0) {
      this.display_score();
      for (let j = 0; j < this.platforms.length; j++) {
        this.platforms[j].display();
        this.player.display();
        if (this.stick != false) {
          this.stick.display();
        }
      }
    }
  }
}

// Declaring the player class
class Player {
  constructor(x, y) {
    this.w = 30;
    this.h = 50;
    this.x = x - this.w;
    this.destination_x = x;
    this.v = 5;
    this.y = y - this.h;
    this.position = 0;
  }

  // Setting Destination of the player so that he moves after the stick is down
  set_destination() {
    if (
      game.stick.x_2 >= game.platforms[1].x &&
      game.stick.x_2 <= game.platforms[1].x + game.platforms[1].w
    ) {
      this.destination_x = game.platforms[1].x + game.platforms[1].w - this.w;
      game.score += 1;
      success.play();
      game.state = 5;
    } else {
      this.destination_x = game.stick.x_2;
      game.state = 8;
    }
  }

  // Setting player's x equal to the platform so it moves along with it
  stick_to_platform() {
    if (game.platforms.length === 2) {
      this.x = game.platforms[0].x + game.platforms[0].w - this.w;
      if (game.platforms[0].x === 0) {
        game.state = 1;
      }
    } else {
      this.x = game.platforms[1].x + game.platforms[1].w - this.w;
      if (game.platforms[1].x === 0) {
        game.state = 1;
      }
    }
  }

  // Function to move the player according to his destination
  move() {
    if (this.x < this.destination_x) {
      this.x += this.v;
      this.position = (this.position + 1) % 7;
    } else if (this.x > this.destination_x) {
      this.x -= this.v;
    } else if (
      this.x == this.destination_x &&
      this.x > game.platforms[0].x + game.platforms[0].w &&
      game.state === 5
    ) {
      game.stick = false;
      game.state = 6;
    }
  }

  // Display the player using the respective position from the sprite sheet
  display() {
    let c = player_img.get(this.position * 108, 0, 108, 120);
    image(c, this.x, this.y, this.w, this.h);
  }
}

// Declaring the platform class
class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.destination_x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.v = 5;
  }

  // Function to move the platform according to its destination
  move() {
    if (this.x != this.destination_x) {
      this.x = this.x - this.v;
    }
  }

  // Display the platform
  display() {
    noStroke();
    fill(color("#6d4a3b"));
    rect(this.x, this.y, this.w, this.h);
    stroke(0);
  }
}

// Declaring the Stick class
class Stick {
  constructor(x, y, w, h) {
    this.l = h;
    this.x_1 = x;
    this.y_1 = y;
    this.x_2 = x;
    this.y_2 = this.y_1 + this.l;
    this.angle = PI / 2;
  }

  // Growing the stick according to how long the mouse is held
  grow() {
    this.y_2 -= 5;
    this.l += 5;
  }

  // Rotate the Stick according when the mouse if released and check if the rotation is complete
  rotate() {
    this.angle -= PI / 64;
    this.x_2 = this.x_1 + this.l * cos(this.angle);
    this.y_2 = game.platforms[0].y - this.l * sin(this.angle);

    if (this.angle <= 0) {
      game.state = 4;
    }
  }

  // Display the stick
  display() {
    strokeWeight(2);
    line(this.x_1, this.y_1, this.x_2, this.y_2);
    strokeWeight(1);
  }
}

function setup() {
  createCanvas(550, 450);
  game = new Game();
}

function draw() {
  game.display();
}

// Perform functions when mouse is clicked according to the state of the game
function mousePressed() {
  if (game.state === 0) {
    game.check_start();
  } else if (game.state === 1) {
    game.state = 2;
  } else if (game.state === 9) {
    game = new Game();
    game.state = 1;
  }
}

// Shift the state when the mouse is released
function mouseReleased() {
  if (game.state === 2) {
    game.state = 3;
  }
}

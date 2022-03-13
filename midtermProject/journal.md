# Stick Flick
The concept of this game revolves around a character that has to travel from one platform to another but the problem has all the platforms have gaps between them. So in order to cross the platform the character creates a stick vertically, and then flicks it in order to lay it down accross the two platforms and then he can cross them. As the character keeps crossing the platforms newer platforms would start appearing. If the character fails to make a stick long enough to reach a platform or makes a stick longer than the gap and width of the next platform the character will fall.

# Concept Pictures
![1](https://github.com/faizanraza09/introToIM/blob/main/midtermProject/1.png)
![2](https://github.com/faizanraza09/introToIM/blob/main/midtermProject/2.png)
![3](https://github.com/faizanraza09/introToIM/blob/main/midtermProject/3.png)
![4](https://github.com/faizanraza09/introToIM/blob/main/midtermProject/4.png)
![5](https://github.com/faizanraza09/introToIM/blob/main/midtermProject/5.png)

# Controls
The character would move automatically to the end of the platform, then the user would have to hold down their mouse to draw the stick vertically and when they release their mouse the stick would flick and would transition into a horizontal bridge for the character to travel over from one platform to another and again the character would reach the end of the platform automatcially and so on.

# The Process

## Step 1 - The Platforms
I started off first of all by making a class for platforms and then drawing them as rectagles at random positions with random widths

## Step 2 - Platform Movement
Next I tried to move the platforms towards the left when i click the right key to emulate when the movement later. I intially started off by making a lot of platfiorms on the screen but i decided to keep two platforms on the screen at the time. This was done by adding a new platform to the array when the platforms started moving to the left and popping the platform from the array when it goes out of screen

## Step 3 - The Stick
The next step was creating the stick creating mechanism. I initially worked with a small square instead of the player rectangle to work on the mechanics first. I used the mousepressed function to change variables so that they can activate the grow function in the stick class and use the mouse released function to stop creating the stick. The next thing was rotating the stick as the mouse is released. I intially tried the rotate function but i soon realized that using that was rotating the platforms too and would require additional code to make it work so I used the sine and cosine functions to determine the x and y coordinate of the stick at all times using the angle at which it was. Its something that was helpful in the generative art assignment too and this too.

## Step 4 - Player Movement
The next step was coding the player movement when the stick was done rotating. I set the destination of the player depending on whether the player created the stick long to reach the platform or not. Then used the player move functions to move the player to move to the end of the platform if the stick was long enough.

## Step 5 - Platform and the Player Movement / Code Breaking Down
Then after the player had reached the platform, the next task was to move the platform back to the left and the player along with it. At this point I realized that I was making seperate variables for every step that was starting and finishing and it was almost impossible to track at which point the code was at and to code the next steps. I discussed this in class and following the advice of Professor Shiloh I decided to implement a state manager.

## Step 6 - Implementing the State Manager
Then I decided to create a state variable which would take different values from 0 to 9 depending on where the code was at where state 0 meant the starting screen and state 9 meaning the restart screen. From then on the code started looking cleaner and a lot easier to implement. To move the player in line with the platform I just equated the players x coordinate with the platform x coordinate when state 7 was reached.

## Step 7 - Creating the Score Board and the Background
After the game mechanics were nearing completion, i created a simple score board which would update by 1 when the player would make a stick appropriate to reach the platform. I aslo searched up a background image and preloaded and integrated that.

## Step 8 - Game Over and Restart Screen
When the player wouldnt make the stick in line with the platform , he would reach the sticks end and then the game would be over. The game over screen then says game over and displays the score with an option to restart the game.

## Step 9 - Sound Effects
Then I searched for sound effects for success in reaching the platforms and failure for reaching them, preloaded them and integrated them into the code.

## Step 10 - Player Animation
The next step was replacing the square with an actual player. For that I searched up a sprite on the internet and then used its dimensions along with the get() function to get the relevant piece from the sprite sheet according to the position the player was in.

## Step 11 - Game Start Screen
Finishing the game with the thing that should be in the start, the starting instruction screen. Quite ironic right ! For that I drew a white rectangle with instructions inside it and then a button to start the game. The instructions screen would be displayed when the game was in state 0 and a mouse click would convert the state 0 to state 1 indicating the sgame has started.


# The Final Game
https://editor.p5js.org/faizanraza09-abrupt/full/Mu2jHQwtc
https://user-images.githubusercontent.com/65659234/158065157-5fa15b76-7472-4100-ae87-4e7eda476e8d.mp4


# Tasks
- make something that uses only one sensor on arduino and makes the ellipse in p5 move on the horizontal axis, in the middle of the screen, and nothing on arduino is controlled by p5

The potentiometer is used and the potential of the potentiometer is mapped to the width of the screen and rotating the potentiometer changes the position of the ellipse
https://studio.youtube.com/video/3Owm6DhnQeE/edit

- make something that controls the LED brightness from p5

The numbers on the keyboard control the brightness of the led with 0 being the dimmest and 9 being the brightest
https://studio.youtube.com/video/QLVyXv9EGzc/edit

Link to p5js sketch: https://editor.p5js.org/faizanraza09-abrupt/sketches/G3gK_z8gl

- take the gravity wind example and make it so every time the ball bounces one led lights up and then turns off, and you can control the wind from one analog sensor

In aarons code when the position of the ball reaches the ground, the variable bounce turns 1 and hence lights up the led. However what we realized that the ball is done bouncing and is on the ground the bulb keeps lighted and so to work around that we set up the led to only light up when the speed  of the ball is more than 0.25 (The speed never turns 0 as its infintely bouncing so 0.25 was a threshold we thought was fine as the ball wasnt visibly bouncing anymore). We then used the potentiometer to control the direction of the wind. Instead of using the arrow keys the code now uses the potential from the arduino to determine the direction of the wind

Link to p5js sketch: https://editor.p5js.org/faizanraza09-abrupt/sketches/CBZcBYIGm

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

# The Most Challenging Part
The most challenging part in my opinion would be when the character moves forwards, to remove the old platforms and bring new platforms, which are randomly generated, into the screen. A solution that might work for this is if all the platforms go into an array and as when the character moves forward the previous platforms x coordinates go leftwards and eventually when the x coordinate is negative, i will remove the object from the array.
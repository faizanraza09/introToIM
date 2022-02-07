# Colla*r*tz Conjecture
Collatz Conjecture, which I thought was pronounced as Coll**art**z Conjecture until very long, asks whether repeating two simple arithmetic operations will eventually transform every positive integer into one. Its something that is seemingly so simple but mathematicians have no clue yet how to go about proving it. But when modelled using code, it shows patterns which are breathtaking and have a stark resemblance to patterns found in nature. It is given by the following notation:

![notation1](https://wikimedia.org/api/rest_v1/media/math/render/svg/ec22031bdc2a1ab2e4effe47ae75a836e7dea459)

However since **3*n+1** will always be an even number, we can speed up the process to see faster growing patterns by this modified notation:

![notation2](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae238aa62598cce67c57371012b818b65d1ad6e3)

#### THE PROCESS
Collatz conjecture based art has been something I have been fascinated by since quite some time so when we had to make an artwork it was the first thing that came to my mind. I started by looking through collatz based arts on google images and this [artwork][1], which looks like a seaweed, caught my attention. Then I went through this [article][2] on how to go about coding the artwork. Then I coded the static art. How the code works is that each number when gone through the collatz conjecture ends at 1 and hence all the branches converge at the same point. If the code encounters an even number the branches turn anticlokwise by a certain angle but if it encounters and odd number they turn clockwise by a certain angle. Then I went about animating the artwork which also looks like a seaweed growing.


#### Difficulties Encountered and their Solutions
The first main difficuly I encountered was when learning how to rotate and translate and how to reset the all the rotations and translations (using the resetmatrix command) back to the origin. This [video][3] helped me understand how to use them. Another difficulty i encountered was when animating the artwork because my inital code did not use the draw function and was only using for loops. So to replace the for loop by the draw function to animate it was a bit challenging but i figured that out by experimenting with the code.

#### Things I Learned
* How to translate and rotate objects
* How to reset the axis
* How to interchangeably use for loops and the draw function



[1]: https://www.pinterest.com/pin/708050372657216224/ 'Title'
[2]: https://opencurve.info/the-collatz-conjecture/ 'Title'
[3]: https://www.youtube.com/watch?v=EYLWxwo1Ed8 'Title'

#### References Used
1. https://www.pinterest.com/pin/708050372657216224/ 
2. https://opencurve.info/the-collatz-conjecture/ 
3. https://www.youtube.com/watch?v=EYLWxwo1Ed8 
![collatz_conjecture](https://github.com/faizanraza09/introToIM/blob/main/Feb8/collatz.png)



# Team Members
- Faizan Raza
- Basil Ahmed

# 19th April 2022
## The Idea
Our idea of the final project revolves around the concept of using arduino to count the number of people present in a room at a time. Our initial idea was to use only one motion sensor connected to the arduino to detect movement in and out of the room but soon we realized that it would be hard to differentiate between people entering and exiting the room. So courtesy of our friend Emaan, we now plan to install three motion sensors, one on one side of the door, one on the other side and one over the door. The sensor on top of the door will ensure that the person actually passed the door and sensors on either sides of the door will help differentiate whether the person entered or exited based on the order in which they are activated. Then we will use p5js to analyse and model the data gathered from the arduino. And if it is implemented and a substantial amount of data is gathered, machine learning models can be used to predict the number of people at a certain time on a certain day which could be helpful for decision making such as in the library. 

# 23 April 2022
## Finalized Idea - People Counter
With the Coronavirus pandemic still very much a problem, practicing social distancing and staying away from others is especially important. However, this is difficult to do in enclosed and crowded areas.

Here is where the people counter can help. It keeps track of the number of people in a room or building by increasing a counter when people enter and decreasing the counter when people leave. Once the number of people in an area surpasses the maximum number of people allowed (which can be set by the user), an alarm will go off until the number of people is within bounds again.

This can prevent buildings and rooms from being over crowded, which can help to limit the virus's spread by making social distancing easier to practice.

The data gathered from the people counter will then be used and manipulated by p5js and the analysis can help the user to determine the pattern of occupancy in the room with regards to time on a certain day. Machine Learning can also be used to design an algorithm based on the data collected. This can help them to make policies to match the number of people in the room such as in the Library.

How it will work is if ultrasonic sensor A is activated before the ultrasonic sensor B, it will mark it as entry and if its vice versa it will mark it as exit and manipulate the count using the arduino code

## Design
The design will consist of an acrylic board over which two breadboards will be installed. The circuit will consist of a buzzer, two ultransonic/infrared sensors, a bluetooth module and an arduino powered by a battery. 

## Arduino Input and Output
The inputs would be the two ultrasonic or infrared sensors, which will be analog and will continuously provide information to the arduino. The outputs would be the buzzer, which will ring when the max capacity is reached, a bluetooth module, which will send information to the laptop in order to analyze the data.

## P5 Input and Output
The input p5 is taking is the count from the arduino, when a person is detected either entering or exiting. The output would be on an LED screen, just like the Air Quality Index on campus, the count of the people and data analysis in the shape of a graph. p5 will also save the data into a csv file so in case the p5 program closes the p5 program can load data from the csv.







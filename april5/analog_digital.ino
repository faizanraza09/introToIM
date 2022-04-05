// this constant won't change:
const int  buttonPin = 2;    // the pin that the pushbutton is attached to
const int lightPin = A2;     // the pin that the ldr is connected to
const int led = 11;          // the pin that the LED1 is attached to
const int led2 = 6;          // the pin that the LED2 is attached to

// Variables will change:
int buttonPushCounter = 0;   // counter for the number of button presses
int buttonState = 0;         // current state of the button
int lastButtonState = 0;     // previous state of the button
int brightness1 = 0;         // brightness of the first led
int brightness2=0;           // brightness of the second led
int fadeAmount = 3;          // amount by which the leds are gonna fade

void setup() {
  // initialize the button pin as a input:
  pinMode(buttonPin, INPUT);
  // initialize the ldr pin as an input:
  pinMode(lightPin,INPUT);
  // initialize the LEDs as an output:
  pinMode(led, OUTPUT);
  pinMode(led2,OUTPUT);
  // initialize serial communication:
  Serial.begin(9600);
}


void loop() {
  // read the pushbutton input pin:
  buttonState = digitalRead(buttonPin);

  // compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
    if (buttonState == HIGH) {
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounter++;
      Serial.println("on");
      Serial.print("number of button pushes: ");
      Serial.println(buttonPushCounter);
    } else {
      // if the current state is LOW then the button went from on to off:
      Serial.println("off");
    }
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  lastButtonState = buttonState;


  /*Checks the modulo of buttonPushCounter by dividing it with 4,
  turns it on when the modulo is 1,
  starts blinking when modulo is 2,
  starts fading in and out when modulo is 3,
  turns off the led
  */
  if (buttonPushCounter % 4 == 0) {
    digitalWrite(led, LOW);
  } 
  else if (buttonPushCounter % 4 ==1){
    digitalWrite(led,HIGH);
    }
  else if (buttonPushCounter % 4 == 2) {
    digitalWrite(led,HIGH);
    delay(100);
    digitalWrite(led,LOW);
    delay(100);
  }

  else if (buttonPushCounter % 4 == 3){
    analogWrite(led,brightness1);
    if (brightness1==255){
      fadeAmount=-3;
      }
    else if (brightness1==0){
      fadeAmount=3;
      }
    brightness1+=fadeAmount;
    delay(30);
    }
   
  else {
    digitalWrite(led, LOW);
  }

  // read the input on analog pin 0:
  int sensorValue = analogRead(A2);
  // print out the value you read:
  //Serial.println(sensorValue);
  delay(1);        // delay in between reads for stability

  
  
  brightness2=map(sensorValue,0,1023,255,0);    //it takes the sensor value and maps it to the brightness of the led from 255 to 0 so when sensor values are high, the brightness is low and vice versa
  Serial.println(brightness2);
  analogWrite(led2,brightness2);    //lights up the led according to the brightness
  
  
  

}

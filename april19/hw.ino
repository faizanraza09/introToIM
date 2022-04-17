void setup() {
  Serial.begin(9600);
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
  while (Serial.available() <= 0) {
    Serial.println("0,0"); // send a starting message
    delay(300);              // wait 1/3 second
  }
}

void loop() {
  while (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();

    // controls the brightness of the light based on the number pressed where 0 means the dimmest and 9 means the brightest
    analogWrite(3,inByte*25.5);

    // if a 1 is received it lights up the led and if a 0 is received it turns it off, 1 represents a bouncing state
    if (inByte==1){
      digitalWrite(5,HIGH);
    }
    else{
      digitalWrite(5,LOW);
    }
    
    // reads the potentiometer value
    int sensorValue = analogRead(A0);
    // prints and sends it to p5js
    Serial.println(sensorValue);

  }
}

//Assignment 2 - It's About Time by Arohi Bangera
//Part B - Tick Tock

var radius = 225; //Radius of the outer circle
//Sizes for all the hands of the clock
var secondshand = 200;
var minuteshand = 180;
var hourhand = 100;

function setup() {
    myCanvas = createCanvas(600, 600); //creating canvas
    myCanvas.parent("myID"); //appending canvas
}

function draw() {
    background(247, 200, 199);

    var markers = TWO_PI / 60; //markers for the circle i.e 60 minutes
    var s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI; //mapping values
    var m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; //mapping values
    var h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI; //mapping values
    //Declaring variables for hour, minute and second
    var hr = (hour() - 12); //12 hour clock time
    var min = minute();
    var sec = second();

    //if statements for displaying time
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    //Time Display
    strokeWeight(0);
    textAlign(CENTER);
    textSize(16);
    text("The current time is: " + hr + ":" + min + ":" + sec, 280, 40);

    translate(width / 2, height / 2);
    strokeWeight(2);
    ellipse(0, 0, 450, 450); //face of the clock

    //Markers for the clock/circle
    strokeWeight(2);
    stroke(0);
    beginShape(POINTS);
    var i = 0;
    while (i < 60) {
        x = cos(markers * i) * secondshand;
        y = sin(markers * i) * secondshand;
        vertex(x, y);
        i++;
    }
    endShape();

    strokeWeight(1);
    line(0, 0, cos(s) * secondshand, sin(s) * secondshand); //Seconds Hand
    strokeWeight(3);
    line(0, 0, cos(m) * minuteshand, sin(m) * minuteshand); //Minutes Hand
    strokeWeight(6); // hour hand should be thicker
    line(0, 0, cos(h) * hourhand, sin(h) * hourhand); //Hour Hand

}

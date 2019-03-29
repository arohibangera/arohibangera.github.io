//Assignment 2 - It's About Time by Arohi Bangera
//Part C - Abstract Clock

function setup() {
    myCanvas = createCanvas(600, 600); //creating canvas
    myCanvas.parent("myID"); //apending canvas
}

function draw() {
    background(0);
    strokeWeight(1);
    noFill();

    //Lines representing the Minute hand
    push();
    translate(width / 2, height / 2);
    for (j = 0; j < minute(); j++) {

        rotate(radians(6));
        stroke("purple");
        strokeWeight(3);
        line(0, 0, 0, -220);
    }
    pop();

    //Ellipse representing the Seconds hand
    push();
    translate(width / 2, height / 2);
    for (var i = 0; i < second(); i++) {
        map(i, 0, 60, 255, 60);
        stroke("orange");
        rotate(radians(3));
        ellipse(0, 0, 30, 350);
    }
    pop();

    //Smaller ellipses/circles representing the hour hand
    push();
    translate(width / 2, height / 2);
    for (var k = 0; k < hour(); k++) {
        rotate(radians(15));
        stroke("white");
        strokeWeight(2);
        ellipse(0, -250, 30, 30);
    }
    pop();

}

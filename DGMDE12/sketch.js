//Assignment 1 by Arohi Bangera
//Artwork Title: Minimalism Infused Overlapping

//Declaring variables for common elements -
//x position and height for the three horizontal recatangles.
let xPos = 200;
let rHeight = 50;

function setup() {
    // creating a canvas that's 1024x768 pixels
    //assigning myCanvas ID to the function so as to link to the HTML page
    myCanvas = createCanvas(1024, 768);
    myCanvas.parent("myID");
    //setting a background color
    background(20);
}

function draw() {
    //Drawing two vertical quads, one bigger than the other and parallel to each other
    beginShape(QUADS);
    //Quad 1 -Smaller Quad
    strokeWeight(1);
    stroke(0); //Black Outline
    fill(0, 49, 110);
    vertex(397, 200); //Point A
    vertex(397, 700); //Point B
    vertex(497, 700); //Point C
    vertex(497, 200); //Point D
    //Quad 2 -Bigger Quad
    fill(0, 21, 64);
    stroke(0);
    vertex(527, 100); //Point A
    vertex(527, 750); //Point B
    vertex(627, 750); //Point C
    vertex(627, 100); //Point D
    endShape();

    //Drawing an arc that will overlap the bigger quad
    fill(188, 210, 232);
    stroke(0); //Black Outline
    arc(630, 100, 100, 100, 0, radians(270));

    //Drawing the two white lines that cut the two quads
    strokeWeight(8);
    stroke(255); //White Stroke
    line(417, 100, 417, 750);
    strokeWeight(8);
    line(557, 100, 557, 750);

    //Drawing the three horizontal rectangles of different widths

    //Rectangle 1
    strokeWeight(3);
    stroke(255);
    fill(82, 138, 174, 125); //transparency assigned of 125
    rect(xPos, 325, 550, rHeight); //using variables declared above
    //Rectangle 2
    fill(46, 89, 132, 160); //transparency assigned of 160
    strokeWeight(3);
    rect(xPos, 425, 650, rHeight); //using variables declared above
    //Rectangle 3
    fill(30, 63, 102, 180); //transparency assigned of 180
    strokeWeight(3);
    rect(xPos, 525, 700, rHeight); //using variables declared above

    //Calling a 'for' loop for the white lines on the third rectangle
    //White lines should start right after the vertical rectangle and end before the horizontal rectangle ends
    for (var i = 650; i <= 860; i = i + 30) {
        strokeWeight(15);
        line(i, 525, i, 575);
    }

    //Starry Night Effect when mouse is pressed, no stroke when mouse is not pressed
    //Try this for yourself!
    if (mouseIsPressed) {
        strokeWeight(2);
        stroke(255); //White Stroke
    } else {
        noStroke();
    }
    line(mouseX - 5, mouseY, mouseX + 5, mouseY);
    line(mouseX, mouseY - 5, mouseX, mouseY + 5);
}

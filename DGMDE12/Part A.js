//Assignment 2 - It's About Time by Arohi Bangera
//Part A - Tally Ho!

function setup() {
    myCanvas = createCanvas(540, 400); //Creating a canvas
    myCanvas.parent("myID"); //Appending the canvas
    background(247, 200, 199); //Custom color background

    //Declaring stroke elements for tally marks
    stroke(0);
    strokeWeight(2);
}

//Declaring variable for mouse press
var press = 0;

//Start of the mouse pressed function
function mousePressed() {
    press = press + 1;

    var lines = 0;

    //Nested for loops declared for tally lines and row adjustments
    for (var y = 50; y <= 350; y = y + 50) {
        for (var x = 50; x <= 490; x = x + 10) {

            //Each time the user presses the mouse, a new line is drawn
            if (lines < press) {
                lines = lines + 1; //new lines

                // if statement for drawing the fifth line in the tally sequence
                if (lines % 5 == 0) {

                    line(x - 50, y + 20, x, y); //fifth line
                } else {
                    line(x, y, x, y + 20);
                }
            }
        }
    }
}

// Start of key pressed function for clearing the canvas and resetting
function keyPressed() {
    clear();
    press = 0;
    background(247, 200, 199); //wipes the screen

}

//Arohi Bangera
//Assignment 3 - DOM, DOM, DOM

//Bulleted Points I have used from the asignement:
// create an element BESIDES a canvas element
// use html() to either retrieve the content of a DOM element for use in your P5 sketch or to modify the content of an element on the page
// use value() to either retrieve the value of an element for use in your P5 sketch or to assign a new value to an element in the DOM
// style() a DOM element with CSS from within P5

//Other requirements:
//Canvas element is relocated within another element on my page via parent()
//mousePressed() is used

var radio;

function setup() {
    //Creating the canvas element
    var mycanvas = createCanvas(1000, 500);
    //Relocating the canvas element using the parent method
    mycanvas.parent("#myCanvasHolder")
        //Creating an element beside the canvas element
    radio = createRadio();
    radio.option("Happy", 'yellow');
    radio.option("Sad", 'blue');
    radio.option("Angry", 'red');
    radio.option("Calm", 'green');
    //Using style for the radio elements
    radio.style('width', '60px');
    radio.style('position', 540, 760);
    radio.style('width', '350px');
    myPara = createP("Click here to know something. ");
    myPara.style('align', 'center');
}

function draw() {
    //Using the value function to retreive value of the radio element
    var val = radio.value();
    background(val);
    if (val) {
        textSize(20);
        textStyle(BOLD);
        text('You are the color ' + val + "!", 410, 250);
    }

}

//Using the mousePressed function, event handler requirement
function mousePressed() {
    // Using the html element to change the content myPara
    myPara.html("The mouse has been pressed, kidding! No matter how you're feeling, hope you have a good rest of the day! :)");
}

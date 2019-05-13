//Arohi Bangera
//Final Project - World Happiness Index: Data Visualization
//Inspiration from: Arslan, E (2017, March 10), p5.js data visualization, CodePen, Retrieved from https://codepen.io/enginarslan/pen/aJJmZP

//Creating an array of objects of 40 countries from the World Happiness Index
//World Happiness Index link: worldhappiness.report/
var happiness = [
{country: "Rwanda", index: 3334},
{country: "Australia", index: 7228},
{country: "Canada", index: 7278},
{country: "South Sudan", index: 2853},
{country: "Luxembourg", index: 7090},
{country: "Denmark", index: 7600},
{country: "Costa Rica", index: 7167},
{country: "Malawi", index: 3410},
{country: "Madagascar", index: 3933},
{country: "United States", index: 6892},
{country: "Iceland", index: 7494},
{country: "Finland", index: 7769},
{country: "Burundi", index: 3775},
{country: "Egypt", index: 4166},
{country: "Sweden", index: 7343},
{country: "Afghanistan", index: 3203},
{country: "Syria", index: 3462},
{country: "New Zealand", index: 7307},
{country: "Switzerland", index: 7480},
{country: "Czech Republic", index: 6852},
{country: "Germany", index: 6985},
{country: "Tanzania", index: 3231},
{country: "Israel", index: 7139},
{country: "Botswana", index: 3488},
{country: "United Kingdom", index: 7054},
{country: "Liberia", index: 3975},
{country: "Norway", index: 7554},
{country: "Burundi", index: 3663},
{country: "Belgium", index: 6923},
{country: "Ireland", index: 7021},
{country: "Comoros", index: 3973},
{country: "Haiti", index: 3597},
{country: "India", index: 4015},
{country: "Togo", index: 4085},
{country: "Netherlands", index: 7488},
{country: "Central African Republic", index: 3083},
{country: "Austria", index: 7246},
{country: "Zambia", index: 4107},
{country: "Lesotho", index: 3802},
{country: "Yemen", index: 3380},

];

function setup() {
    //Creating the canvas element
    var mycanvas=createCanvas(800, 800);
    //Relocating the canvas element using the parent method
    mycanvas.parent('#myCanvasHolder');
    //Changing modes for angles and rectangles
    angleMode(DEGREES);
    rectMode(CORNER);
    //Creating paragraphs in the DOM
    myPara=createP ("Click here for the top 5 countries: ");
    anotherPara=createP ("Click here for the bottom 5 countries: ");
}

function draw() {
    //Defining background color of canvas
    background(26, 82, 118);
    //Defining text size, font color, style of title in graph
    textSize(35);
    fill(255);
    textStyle(BOLD);
    //Graph title and position
    text("World's Happiness", 245, 410);
    text("in 2019", 341, 450);
    var angleSeparation=(360 / happiness.length); // Ensures the array of objects forms a full circle
    var padding=10; // Defines the length of the rectangle bars
    var offset=200; //Defines the starting point of the rectangle bars
    var dataMultiplier=(height/2-offset-padding)/ 10000; //Defines the length and speed of the rectangle bars
    for (var i=0; i < happiness.length; i=i + 1) {
        push();
        var currentData=happiness[i].index; //Creating a variable for the index object in the array
        var country=happiness[i].country; //Creating a variable for the country names object in the array
        var finalHeight=currentData * dataMultiplier;

        //If condition to help color based on top 5, bottom 20 and remaining 15
        if (currentData <=4166) {
            fill (255, 0, 0);
            noStroke();
        }
        else if (currentData >=7488) {
            fill (173, 255, 47);
            noStroke();
        }
        else {
            fill (255);
            noStroke();
        }

        var maxValue=constrain(frameCount * 2, 0, 400); //Defining the speed the bars show up within
        var animatedHeight=map(maxValue, 0, 400, 0, finalHeight);
        translate(width / 2, height / 2);
        rotate(angleSeparation * i);
        rect(0, offset, angleSeparation*2, animatedHeight);
        //Defining styling for numbers within the graph
        textStyle(NORMAL);
        textSize(10);
        textAlign(CENTER, TOP);
        rotate(angleSeparation/i/100);
        //Numbers within the graph
        text(currentData, angleSeparation / 5, 180);

        //Creating a mouse pressed function that shows country names
        if (mouseIsPressed) {
            //Defining style for country names
            fill(0);
            textStyle(BOLD);
            textSize(10);
            textAlign(CENTER, CENTER);
            rotate(angleSeparation*8);
            //Country names within the graph
            text(country, 290, 90);
        }
        pop();
    }
    //Creating a background detail with ellipses
    for (var j=400; j <=650; j=j+50) {
        noFill();
        stroke(color(211, 211, 211, 50)); //Setting the color and the transparency
        ellipse(400, 400, j, j);
    }
}

//Creating a mouse pressed function to replace existing HTML
function mousePressed() {
    // Using the html element to change the content myPara
    myPara.html("Top 5 countries: 1.Finland 2. Denmark 3. Norway 4. Iceland 5. Netherlands");
    anotherPara.html("Bottom 5 countries: 1. South Sudan 2. Central African Republic 3. Afghanistan 4. Tanzania 5. Rwanda");
}

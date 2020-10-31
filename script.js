let c = 8;
let n = 0;

function setup() {
    createCanvas(displayWidth, displayHeight);
    angleMode(DEGREES)
    background(230);

    

}

function draw() {
    angle = n * 137.5; 
    r = c * Math.sqrt(n);

    x = r * cos(angle) + displayWidth / 2;
    y = r * sin(angle) + displayHeight / 2;

    circle(x, y, 10);
    fill(angle % 256, angle % 255, 255, 90);

    n++

}

let x = 300;
let y = 300;
let x_offset = 0;
let y_offset = 100;

function setup() {
    createCanvas(600,600);
    frameRate(30);
}

function draw() {
    background(200);
    noStroke();
    //draw sphere
    my_circle(x,y);
    x_offset += 0.01;
    y_offset += 0.01;
    x = noise(x_offset)*width;
    y = noise(y_offset)*height;

    
}

function my_circle(x,y) {
    for(let i = 0; i < 50; i++) {
        let alpha = 50 + i * 10;
        fill(i*5, );
        circle(x, y, 100-i*2);
    }
}
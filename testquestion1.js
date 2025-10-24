let bird
let background, birdImg;

function preload(){
    bird = loadImage('assets/bird.png');
    background = loadImage('assets/background.png');
    }
    // write code to preload bird.png and background.png
    // refer to assets folder

function setup(){
    new Canvas(400, 600);
    bird = new Sprite;
    bird.x = 200;
    bird.y = 300;

    // write code to create sprite and load bird image on sprite
}

function draw(){
    image(background, 0, 0, width, height);
    image(imgObject, x, y, width, height);

}

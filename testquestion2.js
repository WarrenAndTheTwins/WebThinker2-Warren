let square;

function setup(){
    new Canvas(400, 600);
    world.gravity.y = 10
    // code to set the gravity of the world
    rect(200, 300, 60, 60);
    // code to create a new square sprite
}

function draw(){
    background("grey");
    if(mouse.presses()){
       square.velocity.y = 12;
    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up
    }
}


    // code to check if mouse is pressed i.e. mouse.presses()
        // if mouse is pressed, the square sprite "flies" up

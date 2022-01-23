img = "";

function setup()
{
    canvas = createCanvas(990,660);
    canvas.center();
}

function preload()
{
    img = loadImage('ac.jpg');
}

function draw()
{
    image(img, 0, 0, 840, 520);
    fill("#FF0000");
    text("Air conditioner", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}
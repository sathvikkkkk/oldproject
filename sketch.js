
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(50);

if (keyIsDown(DOWN_ARROW))

{
 background('red');
}

if (keyIsDown(LEFT_ARROW))

{
  background('blue');


}

if (keyIsDown(RIGHT_ARROW))
{
  background('green');
}

if (keyIsDown(UP_ARROW))
{
  background('purple')
}
drawSprites()

}


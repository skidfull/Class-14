var ball = {
  color: ["blue", "green", "red", "yellow", "purple"],

  X: 10, 
  
  Y: 10,

  SPEEDx: 0,

  SPEEDy: 0,

  radius: 20
}



function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220);

  circle(ball.X, ball.Y, ball.radius)

  fill(ball.color[0])

  ball.SPEEDx = 1

  ball.X = ball.X+ball.SPEEDx

  ball.SPEEDy = 1

  ball.Y = ball.Y+ball.SPEEDy
}

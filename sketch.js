function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)

  canvas.style('display', 'block')
}

function draw() {
  background(38)

  ellipse(mouseX, mouseY, 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

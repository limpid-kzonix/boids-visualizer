
function setup () {
  createCanvas(640, 360)
}

function draw () {
  background(51)
  for (let boid of flock) {
    boid.edges()
    boid.flock(flock)
    boid.update()
    boid.show()
  }
}

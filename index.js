let flock = []
let maxFlockSize = 100
let canvasWindowSpacingPercent = 10
function setup () {

  let createdCanvas = createCanvas(windowWidth, calcWithWindowSpacing(windowHeight))
  createdCanvas.parent('canvas-container')
  addFlockMember()
}

function addFlockMember () {
  for(let i = 0; i< 100; i++) {
    flock.push(new FlockingObject())
  }
}
/**
 * Overriding of p5 listeners for resizing of window.
 * Resize {@code createdCanvas} according to windows height and width.
 */
function windowResized () {
  console.debug(windowWidth + " and " + windowHeight)
  resizeCanvas(windowWidth, calcWithWindowSpacing(windowHeight))
}

function draw () {
  background(23)
  for (let member of flock) {
    member.edges()
    member.flock(flock)
    member.update()
    member.show()
  }
}

const calcWithWindowSpacing = (value) => {
  return value - value * canvasWindowSpacingPercent / 100
}

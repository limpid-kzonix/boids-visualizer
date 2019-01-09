let canvasWindowSpacingPercent = 10
function setup () {
  let createdCanvas = createCanvas(windowWidth, calcWithWindowSpacing(windowHeight))
  createdCanvas.parent('canvas-container')
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
}

const calcWithWindowSpacing = (value) => {
  return value - value * canvasWindowSpacingPercent / 100 
}

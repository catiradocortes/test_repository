//We need a variable to hold our image
let img;

//We will divide the image into segments
let numSegments = 50;

//We will store the segments in an array
let segments = [];

//lets add a variable to switch between drawing the image and the segments
let drawSegments = true;

let imgDrawProperties = {aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0};

let canvasAspectRatio = 0;


//lets load the image from disk
function preload() {
  img = loadImage('/assets/Mona_Lisa_by_Leonardo_da_Vinci_500_x_700.jpg');
}

function setup() {
  //We will make the canvas the same size as the image using its properties
  createCanvas(windowWidth, windowHeight); // !Here we have 1 change

  // ! calculate the aspect ratio
  imgDrawProperties.aspect = img.width / img.height;

  //! canvas aspect ratio
  canvasAspectRatio = width/height;
  //! Calculate the aspect ratio fo the canvas
  calculateImageDrawProperties();

  //We can use the width and height of the image to calculate the size of each segment
  let segmentWidth = img.width / numSegments;
  let segmentHeight = img.height / numSegments;
  /*
  Divide the original image into segments, we are going to use nested loops
  */

  for (let segYPos=0; segYPos<img.height; segYPos+=segmentHeight) {
    //this is looping over the height
    for (let segXPos=0; segXPos<img.width; segXPos+=segmentWidth) {
      //We will use the x and y position to get the colour of the pixel from the image
      //lets take it from the centre of the segment
      let segmentColour = img.get(segXPos + segmentWidth / 2, segYPos + segmentHeight / 2);
      let segment = new ImageSegment(segXPos,segYPos,segmentWidth,segmentHeight,segmentColour);
      segments.push(segment);
    }
  }
}

function draw() {
  background(255);
  if (drawSegments) {
    //lets draw the segments to the canvas
    for (const segment of segments) {
      segment.draw();
    }
  } else {
    //lets draw the image to the canvas
    image(img, imgDrawProperties.xOffset, imgDrawProperties.yOffset, imgDrawProperties.width, imgDrawProperties.height);
  }
}


function keyPressed() {
  if (key == " ") {
    //this is a neat trick to invert a boolean variable,
    //it will always make it the opposite of what it was
    drawSegments = !drawSegments;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  calculateImageDrawProperties();
}

function calculateImageDrawProperties() {

  //! calculate the aspect ratio of the image
  canvasAspectRatio = width/height;

  //if the image is wider than the canvas
  if (imgDrawProperties.aspect > canvasAspectRatio) {
    //then we will draw the image to the width of the canvas
    imgDrawProperties.width = width;
    //and calculate the height based on the aspect ratio
    imgDrawProperties.height = width / imgDrawProperties.aspect;
    imgDrawProperties.yOffset = (height - imgDrawProperties.height) / 2;
    imgDrawProperties.xOffset = 0;
  } else if (imgDrawProperties.aspect < canvasAspectRatio) {
    //otherwise we will draw the image to the height of the canvas
    imgDrawProperties.height = height;
    //and calculate the width based on the aspect ratio
    imgDrawProperties.width = height * imgDrawProperties.aspect;
    imgDrawProperties.xOffset = (width - imgDrawProperties.width) / 2;
    imgDrawProperties.yOffset = 0;
  }
  else if (imgDrawProperties.aspect == canvasAspectRatio) {
    //if the aspect ratios are the same then we can draw the image to the canvas size
    imgDrawProperties.width = width;
    imgDrawProperties.height = height;
    imgDrawProperties.xOffset = 0;
    imgDrawProperties.yOffset = 0;
  }
}




//Here is our class for the image segments, we start with the class keyword
class ImageSegment {

  constructor(srcImgSegXPosInPrm,srcImgSegYPosInPrm,srcImgSegWidthInPrm,srcImgSegHeightInPrm,srcImgSegColourInPrm) {
    //these parameters are used to set the internal properties of an instance of the segment
    //These parameters are named as imageSource as they are derived from the image we are using
    this.srcImgSegXPos = srcImgSegXPosInPrm;
    this.srcImgSegYPos = srcImgSegYPosInPrm;
    this.srcImgSegWidth = srcImgSegWidthInPrm;
    this.srcImgSegHeight = srcImgSegHeightInPrm;
    this.srcImgSegColour = srcImgSegColourInPrm;
  }

  draw() {
    //lets draw the segment to the canvas, for now we will draw it as an empty rectangle so we can see it
    stroke(0);
    fill(this.srcImgSegColour);
    rect(this.srcImgSegXPos, this.srcImgSegYPos, this.srcImgSegWidth, this.srcImgSegHeight);
  }
}
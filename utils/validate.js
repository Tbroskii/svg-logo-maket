const prompt = require('prompt-sync')();
const SVG = require('svg.js');

function generateLogo() {
  // Prompt user for input
  const text = prompt('Enter up to three characters: ');
  const textColor = prompt('Enter text color (keyword or hex): ');

  // Display shape options
  console.log('Choose a shape: 1. Circle, 2. Triangle, 3. Square');
  const shapeChoice = parseInt(prompt());

  // Prompt user for shape color
  const shapeColor = prompt('Enter shape color (keyword or hex): ');

  // Create SVG element
  const draw = SVG().size(300, 200);

  // Add text to SVG
  draw.text(text).fill(textColor).move(10, 20);

  // Add shape to SVG based on user choice
  switch (shapeChoice) {
    case 1:
      draw.circle(100).fill(shapeColor).move(100, 50);
      break;
    case 2:
      draw.polygon('100,20 200,20 150,150').fill(shapeColor);
      break;
    case 3:
      draw.rect(100, 100).fill(shapeColor).move(100, 50);
      break;
    default:
      console.log('Invalid shape choice');
      return;
  }

  // Save SVG file
  draw.svg().toFile('logo.svg');

  console.log('Generated logo.svg');
}

// Call the function to generate the logo
generateLogo();
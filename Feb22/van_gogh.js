// Declaring initial variables
let data;
let colors = [];
// Loading the data
function preload() {
  data = loadTable("df.csv", "csv", "header");
}

function setup() {
  createCanvas(500, 500);
  rows = data.getRows();
  for (i = 0; i < rows.length; i++) {
    // Pushing the hex codes into the array
    row = rows[i].arr;
    colors.push(row[1]);
  }
}

k = 0;
x = 0;
y = 0;
function draw() {
  for (l = 0; l < 5; l++) {
    // cleaning the string with the hex codes
    split_colors = splitTokens(colors[k], [")", "(", ",", "'"]);
    let split_colors_2 = [];
    // further cleaning the string and putting the hex codes in a list
    for (p = 0; p < split_colors.length; p++) {
      if (split_colors[p] != " ") {
        split_colors_2.push(split_colors[p]);
      }
    }
    // filling the rectangles with respective colors
    fill(color(trim(split_colors_2[l]).toLowerCase()));
    noStroke();
    size = 20;
    rect(x, y, size, size);

    // making sure that the rectangles go rightwards if there is space or downwards if there is no space
    if (x < width - size) {
      x += size;
    } else {
      y += size;
      x = 0;
    }
  }

  // Finish the draw loop if the end of the array is reached
  if (k < colors.length) {
    k += 1;
  } else {
    noLoop();
  }
}

let matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let tamaño = 100

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255);
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x = i * tamaño
      y = j * tamaño
      
      stroke("black")
      strokeWeight(4)
      rect(x, y, tamaño, tamaño)
      
      if (matriz[i][j] === 0) {
        fill(255)
      } else if (matriz[i][j] === 1) {
          stroke("blue")
          line(x + 33, y + 33 , x + 66, y + 66)
          line(x + 66, y + 33, x + 33, y + 66)
      } else {
          fill(255,0)
          stroke("red")
          circle(x + 50, y + 50, 45)
      }
      
      
      
    }
  }
}

function mousePressed() {
  let i = floor(mouseX / tamaño)
  let j = floor(mouseY / tamaño)
  
  if (matriz[i][j] === 1) {
    matriz[i][j] = 2
  } else {
    matriz[i][j] = 1
  }
}

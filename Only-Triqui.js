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
  background(50);
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      x = i * tamaño
      y = j * tamaño
      
      if (matriz[i][j] === 0) {
        fill(20)
      } else {
        fill(0, 0, 255)
      }
      
      stroke(10)
      rect(x, y, tamaño, tamaño)
      
      noStroke()
      fill(255, 100)
      circle(x + 50, y + 50, 30)
      
    }
  }
}

function mousePressed() {
  let i = floor(mouseX / tamaño)
  let j = floor(mouseY / tamaño)
  
  if (matriz[i][j] === 0) {
    matriz[i][j] = 1
  } else {
    matriz[i][j] = 0
  }
}

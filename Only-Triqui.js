let matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

let tamaño = 100;
let turno  = 1;
let hayGanador = false;
let mensaje = "Turno: Jugador 1 (Azul)";
let movimientos = 0;


function setup() {
  createCanvas(300, 380);
  textSize(20);
  textAlign(CENTER,CENTER)
}

function draw() {
  background(255);
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = i * tamaño;
      let y = j * tamaño;
      
      stroke("black")
      strokeWeight(4)
      noFill()
      rect(x, y, tamaño, tamaño);
      
      if (matriz[i][j] === 1) {
        
        stroke("blue");
        line(x + 33, y + 33 , x + 66, y + 66);
        line(x + 66, y + 33, x + 33, y + 66);
        
      } else if (matriz[i][j] === 2) {
        
        stroke("red");
        circle(x + 50, y + 50, 45);
        
      }
    }
  }
  
  noStroke()
  
  fill(0)
  textSize(20)
  
  text(mensaje, 150, 325)
  
  fill(120)
  textSize(14)
  text("Pulsa 'R' para reiniciar en cualquier momento", 150, 353)
}

function mousePressed() {
  
  if (hayGanador === true) return;
  
  let i = floor(mouseX / tamaño)
  let j = floor(mouseY / tamaño)
  
  if (i >= 0 && i < 3 && j >= 0 && j < 3 && matriz[i][j] === 0) {
     
    matriz[i][j] = turno;
    movimientos++;
    revisarSiGano();
    
    if (hayGanador === false && movimientos === 9) {
      hayGanador = true
      mensaje = ("EMPATE Reinicia para jugar")
    }
    
    if (hayGanador === false) {
      if(turno === 1) {
        turno = 2
        mensaje = ("Turno: Jugador 2 (Rojo)")
      } else {
        turno = 1
        mensaje = ("Turno: Jugador 1 (Azul)")
      }
    }
    }
  }

function revisarSiGano() {
  let jugador = turno
  
  if (matriz[0][0] === jugador && matriz[0][1] === jugador && matriz[0][2] === jugador) { ganar(); }
  if (matriz[1][0] === jugador && matriz[1][1] === jugador && matriz[1][2] === jugador) { ganar(); }
  if (matriz[2][0] === jugador && matriz[2][1] === jugador && matriz[2][2] === jugador) { ganar(); }
  
  //columnas
  if (matriz[0][0] === jugador && matriz[1][0] === jugador && matriz[2][0] === jugador) { ganar(); }
  if (matriz[0][1] === jugador && matriz[1][1] === jugador && matriz[2][1] === jugador) { ganar(); }
  if (matriz[0][2] === jugador && matriz[1][2] === jugador && matriz[2][2] === jugador) { ganar(); }
  if (matriz[0][0] === jugador && matriz[1][1] === jugador && matriz[2][2] === jugador) { ganar(); }
  if (matriz[2][0] === jugador && matriz[1][1] === jugador && matriz[0][2] === jugador) { ganar(); }
}

function ganar() {
  hayGanador = true
  if (turno === 1) mensaje = ("GANO EL AZUL");
  else mensaje = ("GANO EL ROJO")
}

function reiniciar () {
  matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
  turno  = 1;
  hayGanador = false;
  mensaje = "Turno: Jugador 1 (Azul)";
  movimientos = 0;
}

function keyPressed() {
  if (key === "r" || key === "R") {
    reiniciar();
  }
}

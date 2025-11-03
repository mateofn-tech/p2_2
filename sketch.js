let naranjas = [];
let cantidad = 10;

function setup() {
  createCanvas(1920, 1080);
  noStroke();

  // Crear 10 naranjas con posiciones y tamaños aleatorios
  for (let i = 0; i < cantidad; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let tam = random(120, 80);
    let velocidad = random(10, 22);
    naranjas.push(new Naranja(x, y, tam, velocidad));
  }
}

function draw() {
  background(180, 220, 255); // cielo azul

  // Dibujar y mover las naranjas
  for (let n of naranjas) {
    n.show();
    n.move();
  }
}

// --- Clase Naranja ---
class Naranja {
  constructor(x, y, tam, velocidad) {
    this.x = x;
    this.y = y;
    this.tam = tam;
    this.velocidad = velocidad;
    this.colorBase = color(255, 140, 0);
  }

  show() {
    // sombra
    fill(100, 80);
    ellipse(this.x + 5, this.y + 5, this.tam * 0.9);

    // cuerpo
    fill(this.colorBase);
    ellipse(this.x, this.y, this.tam);

    // brillo
    fill(255, 150);
    ellipse(this.x - this.tam * 0.2, this.y - this.tam * 0.2, this.tam * 0.3);

    // tallo
    stroke(60, 30, 10);
    strokeWeight(3);
    line(this.x, this.y - this.tam / 2, this.x, this.y - this.tam / 2 - 10);

    // hoja
    fill(60, 150, 60);
    noStroke();
    ellipse(this.x + 5, this.y - this.tam / 2 - 5, this.tam * 0.25, this.tam * 0.12);
  }

  move() {
    this.y += this.velocidad;

    // Si sale del lienzo, reaparece arriba
    if (this.y > height + this.tam / 2) {
      this.y = -this.tam / 2;
      this.x = random(width); // nueva posición horizontal
      this.velocidad = random(1, 3); // nueva velocidad
    }
  }
}

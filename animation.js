const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

const symbols = ['{ }', '< />', '0101', '//', 'function', 'return', 'const', '=>', ';'];

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.text = symbols[Math.floor(Math.random() * symbols.length)];
    this.size = Math.floor(Math.random() * 14) + 10;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.3 + 0.05;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }

  draw() {
    ctx.font = `${this.size}px monospace`;
    ctx.fillStyle = `rgba(192, 132, 252, ${this.opacity})`; // Lavender with varying opacity
    ctx.fillText(this.text, this.x, this.y);
  }
}

function init() {
  resize();
  for (let i = 0; i < 40; i++) {
    particles.push(new Particle());
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
document.addEventListener('DOMContentLoaded', init);

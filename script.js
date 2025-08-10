// Texto con efecto máquina de escribir
const text = "Feliz cumpleaños mi amor, eres mi regalo más hermoso 💖";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Animación de corazones
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
for (let i = 0; i < 30; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 1 + 0.5
    });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
        ctx.beginPath();
        ctx.fillStyle = "pink";
        ctx.moveTo(h.x, h.y);
        ctx.bezierCurveTo(h.x + h.size / 2, h.y - h.size / 2,
                          h.x + h.size, h.y + h.size / 3,
                          h.x, h.y + h.size);
        ctx.bezierCurveTo(h.x - h.size, h.y + h.size / 3,
                          h.x - h.size / 2, h.y - h.size / 2,
                          h.x, h.y);
        ctx.fill();
        h.y -= h.speed;
        if (h.y < -10) {
            h.y = canvas.height + 10;
            h.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(drawHearts);
}
drawHearts();

// Galería automática
const gallery = document.querySelector(".gallery");
const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"]; // Cambia por tus fotos
fotos.forEach(foto => {
    const img = document.createElement("img");
    img.src = `img/${foto}`;
    gallery.appendChild(img);
});

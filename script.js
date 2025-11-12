// PRELOADER
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scroll-bar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollBar.style.width = progress + "%";
});

// DARK/LIGHT MODE TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.innerHTML = document.body.classList.contains("light")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// TYPING EFFECT
const typingText = document.getElementById("typing-text");
const textArray = [
  "AI/ML Engineer 💻",
  "Software Developer 🚀",
  "Automation Specialist 🤖",
  "Data Science Enthusiast 📊"
];
let idx = 0, char = 0, current = "";
function type() {
  if (char < textArray[idx].length) {
    current += textArray[idx].charAt(char);
    typingText.innerHTML = current;
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => { erase(); }, 1500);
  }
}
function erase() {
  if (char > 0) {
    current = current.slice(0, -1);
    typingText.innerHTML = current;
    char--;
    setTimeout(erase, 50);
  } else {
    idx = (idx + 1) % textArray.length;
    setTimeout(type, 300);
  }
}
type();

// FLOATING ORBS BACKGROUND
const canvas = document.getElementById("bg-animation");
const ctx = canvas.getContext("2d");
let width, height, orbs = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < 50; i++) {
  orbs.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let orb of orbs) {
    ctx.beginPath();
    ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,224,255,0.4)";
    ctx.fill();
    orb.x += orb.dx;
    orb.y += orb.dy;
    if (orb.x < 0 || orb.x > width) orb.dx *= -1;
    if (orb.y < 0 || orb.y > height) orb.dy *= -1;
  }
  requestAnimationFrame(animate);
}
animate();

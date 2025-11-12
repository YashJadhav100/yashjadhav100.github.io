// Typing animation
const typedText = document.getElementById("typed");
const roles = [
  "AI/ML Developer",
  "Data Scientist",
  "Software Engineer",
  "Automation Enthusiast",
  "Problem Solver"
];

let i = 0;
let j = 0;
let deleting = false;

function typeEffect() {
  if (i < roles.length) {
    let current = roles[i];
    if (!deleting) {
      typedText.textContent = current.substring(0, j + 1);
      j++;
      if (j === current.length + 8) deleting = true;
    } else {
      typedText.textContent = current.substring(0, j - 1);
      j--;
      if (j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
      }
    }
  }
  setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();

// Fade-in animation for sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 150) sec.classList.add("visible");
  });
});

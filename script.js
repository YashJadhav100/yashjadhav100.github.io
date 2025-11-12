// Smooth scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card, .skill-card").forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if (rect < screen) {
      el.classList.add("visible");
    }
  });
});

// Animated glowing blob effect
const blob = document.createElement("div");
blob.classList.add("glow");
document.body.appendChild(blob);

document.addEventListener("mousemove", (e) => {
  blob.style.left = `${e.pageX}px`;
  blob.style.top = `${e.pageY}px`;
});

// Section fade-in animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".content").forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 150) sec.classList.add("visible");
  });
});

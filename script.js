/* MOBILE MENU TOGGLE */
const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}

document.querySelectorAll(".mobile-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  })
);

/* PAGE LOADER */
window.addEventListener("load", () => {
  const loader = document.querySelector("#loader");
  if (loader) loader.style.display = "none";
});

/* SCROLL BAR */
const scrollBar = document.querySelector("#scroll-bar");
window.addEventListener("scroll", () => {
  const scrollPercent =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollBar.style.width = scrollPercent + "%";
});

/* FADE-IN OBSERVER */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".page, .card, .timeline-item").forEach((el) => {
  observer.observe(el);
});

/* STAT COUNTER ANIMATION */
function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const speed = 30;
  const update = () => {
    const current = +counter.innerText;
    if (current < target) {
      counter.innerText = current + 1;
      setTimeout(update, speed);
    } else {
      counter.innerText = target;
    }
  };
  update();
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll("[data-target]");
        counters.forEach(animateCounter);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stats").forEach((statSection) => {
  statObserver.observe(statSection);
});

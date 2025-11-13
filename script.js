/* PAGE LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 700);
  }, 600);
});

/* SCROLL BAR */
window.addEventListener("scroll", () => {
  const scrollBar = document.getElementById("scroll-bar");
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  scrollBar.style.width = scrolled + "%";
});

/* SCROLL REVEAL (cards, pages, timeline) */
const revealElements = document.querySelectorAll(
  ".page, .timeline-item, .card"
);

function revealOnScroll() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* NAVBAR ACTIVE LINK HIGHLIGHT (for sections in index.html) */
const navLinks = document.querySelectorAll(".nav-links a[href*='#']");
const sections = document.querySelectorAll("section[id]");

function highlightNav() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const height = current.offsetHeight;
    const top = current.offsetTop - 150;
    const id = current.getAttribute("id");

    if (scrollY > top && scrollY <= top + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(
        ".nav-links a[href*='" + id + "']"
      );
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNav);

/* COUNTER – FOR STATS SECTION */
const statNumbers = document.querySelectorAll(".stat h1");
let statsStarted = false;

function runStatCounter() {
  const statSection = document.querySelector(".stats");
  if (!statSection) return;

  const top = statSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100 && !statsStarted) {
    statsStarted = true;

    statNumbers.forEach((stat) => {
      let target = +stat.getAttribute("data-target");
      let count = 0;
      let speed = target / 80;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          stat.textContent = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          stat.textContent = target;
        }
      };

      updateCount();
    });
  }
}

window.addEventListener("scroll", runStatCounter);

/* SMOOTH SCROLL FOR NAVBAR INTERNAL LINKS */
document
  .querySelectorAll(".nav-links a[href^='#']")
  .forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const section = document.querySelector(this.getAttribute("href"));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    });
  });

/* 3D CARD HOVER EFFECT */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateX(${(-y / 20)}deg) rotateY(${
      x / 20
    }deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

/* OPTIONAL HOVER SOUND FOR NAVBAR */
const hoverSound = document.getElementById("hover-sound");

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    if (hoverSound) {
      hoverSound.currentTime = 0;
      hoverSound.play().catch(() => {});
    }
  });
});

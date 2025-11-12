// 🌐 Yash Jadhav Portfolio JS

// Smooth scroll effect for navigation
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Highlight navbar link based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-cyan-400");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-cyan-400");
    }
  });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
  observer.observe(section);
});

// Scroll-to-top button (optional enhancement)
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.className =
  "fixed bottom-6 right-6 bg-cyan-500 text-black font-bold px-3 py-2 rounded-full shadow-lg hover:bg-cyan-400 hidden transition-all";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional console signature (recruiters love clean branding)
console.log(
  "%cWelcome to Yash Jadhav’s Portfolio 🚀",
  "color: cyan; font-size: 14px; font-weight: bold;"
);

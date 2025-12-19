// ================================
// Run after DOM loads
// ================================
document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     Typed.js Animation (Hero)
  ========================== */
  if (document.querySelector(".typed")) {
    new Typed(".typed", {
      strings: [
        "Python Developer",
        "Java Developer",
        "Software Engineer"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true
    });
  }

  /* ==========================
     Skill Progress Animation
  ========================== */
  const skillSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".skill-progress");

  if (skillSection && progressBars.length > 0) {
    const animateSkills = () => {
      progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-progress");
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          animateSkills();
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(skillSection);
  }

  /* ==========================
     Scroll To Top Button
  ========================== */
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});

/* ==========================
   AOS Animation Init
========================== */
AOS.init({
  duration: 1000,
  once: true
});

/* ==========================
   HAMBURGER MENU TOGGLE
========================== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Close menu when clicking a link (mobile UX) */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

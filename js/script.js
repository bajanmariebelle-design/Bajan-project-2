/* ============================================================
   KABANKALAN CATHOLIC COLLEGE, INC. — CUSTOM JAVASCRIPT
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");

  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 40);
    backToTop.classList.toggle("show", y > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Back to top ---------- */
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".kcc-navbar .nav-link[href^='#']");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- Scroll reveal animations ---------- */
  const revealSelectors = [
    ".program-card",
    ".step-card",
    ".life-card",
    ".news-card",
    ".why-card",
    ".mv-card",
    ".highlight-item",
    ".about-media",
    ".contact-form-card",
    ".contact-info",
  ];

  const revealEls = document.querySelectorAll(revealSelectors.join(","));
  revealEls.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Contact form (frontend demo) ---------- */
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }
    // Demo only: no backend. Replace with a real service (e.g. Formspree, EmailJS).
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check2-circle"></i> Demo Only — Not Sent';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      form.reset();
      form.classList.remove("was-validated");
    }, 2500);
  });

  /* ---------- Close mobile menu after clicking a link ---------- */
  const menuToggle = document.querySelector(".kcc-toggler");
  const navMenu = document.getElementById("kccNavMenu");
  navMenu.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
})();

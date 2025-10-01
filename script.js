// ========== Hero Animation ==========
gsap.from(".hero-text", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from("#hero p", {
  opacity: 0,
  y: 50,
  delay: 0.5,
  duration: 1,
  ease: "power2.out"
});

gsap.from("#hero a", {
  opacity: 0,
  scale: 0.5,
  delay: 1,
  duration: 1,
  ease: "back.out(1.7)"
});

// ========== Scroll Animations ==========
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec.children, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
});

// ========== Mouse Tracking Blob ==========
const blob = document.querySelector("#blob");
window.addEventListener("mousemove", (e) => {
  gsap.to(blob, {
    x: e.clientX - blob.offsetWidth / 2,
    y: e.clientY - blob.offsetHeight / 2,
    duration: 0.3,
    ease: "power2.out"
  });
});

// ========== Mobile Menu ==========
const menuBtn = document.getElementById("menuBtn");
let menuOpen = false;

// Create fullscreen nav dynamically
const fullNav = document.createElement("div");
fullNav.className = "fixed inset-0 bg-gray-900 flex flex-col items-center justify-center text-3xl space-y-8 hidden z-50";
fullNav.innerHTML = `
  <a href="#hero" class="hover:text-indigo-400">Home</a>
  <a href="#about" class="hover:text-indigo-400">About</a>
  <a href="#services" class="hover:text-indigo-400">Services</a>
  <a href="#work" class="hover:text-indigo-400">Work</a>
  <a href="#contact" class="hover:text-indigo-400">Contact</a>
`;
document.body.appendChild(fullNav);

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    fullNav.classList.remove("hidden");
    gsap.fromTo(fullNav, {opacity: 0}, {opacity: 1, duration: 0.5});
  } else {
    gsap.to(fullNav, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => fullNav.classList.add("hidden")
    });
  }
});

const progress = document.getElementById("progress");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  progress.style.width = pct + "%";
  nav.classList.toggle("scrolled", window.scrollY > 12);
}, { passive: true });

document.querySelectorAll(".hero-shot, .case-media img, .photo-card img, .team img").forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const r = img.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.015)`;
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "";
  });
  img.style.transition = "transform 0.35s ease";
});

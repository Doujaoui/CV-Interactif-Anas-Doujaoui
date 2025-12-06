function addProject() {
  const list = document.getElementById("projectList");
  const name = prompt("Nom du projet (court):", "");
  if (!name) return;
  const newItem = document.createElement("li");
  newItem.textContent = name;
  newItem.classList.add("new-project");
  list.appendChild(newItem);
  // small flash animation:
  newItem.style.transition = "background 0.6s ease";
  newItem.style.background = "#fff6d9";
  setTimeout(() => newItem.style.background = "", 900);
}

document.getElementById("addProjectBtn").addEventListener("click", addProject);

// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Reveal section cards when in viewport
function revealOnScroll() {
  const cards = document.querySelectorAll('.section-card');
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      card.classList.add('fade-in-visible');
      card.style.opacity = 1;
      card.style.transform = 'none';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  // initial reveal (also triggers CSS animation)
  document.querySelectorAll('.section-card').forEach((c,i) => {
    c.style.animation = `fadeIn 0.9s forwards ${0.12 + i*0.08}s`;
  });
  revealOnScroll();
});

// (Optional) Very simple "download to PDF" using print
document.getElementById("downloadBtn").addEventListener("click", () => {
  window.print();
});
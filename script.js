// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.querySelector('.nav__links');
if (toggle) {
  toggle.addEventListener('click', () => links.classList.toggle('is-open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('is-open'))
  );
}

// Projects carousel arrows
const track = document.getElementById('track');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
function cardStep() {
  const card = track && track.querySelector('.card');
  return card ? card.getBoundingClientRect().width + 24 : 320;
}
if (prev && next && track) {
  prev.addEventListener('click', () => track.scrollBy({ left: -cardStep(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left:  cardStep(), behavior: 'smooth' }));
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-status').textContent = "Message sent! (Simulation)";
  e.target.reset();
});

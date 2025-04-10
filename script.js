const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
fadeElements.forEach(el => observer.observe(el));

// Confirmation formulaire
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const confirmation = document.getElementById("confirmationMessage");
  confirmation.textContent = `Merci ${name}, j'ai bien reçu votre message. Je vous contacterai bientôt !`;
});

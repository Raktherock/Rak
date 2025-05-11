document.addEventListener("DOMContentLoaded", () => {
  // Reveal achievement cards on scroll
  const achievementCards = document.querySelectorAll(".achievement-card");
  const checkScroll = () => {
    achievementCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("visible");
      }
    });
    
    // Reveal skills buttons when the skills container is in view
    const skillsContainer = document.querySelector(".skills");
    if (skillsContainer) {
      const rect = skillsContainer.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        skillsContainer.classList.add("visible");
      }
    }
  };

  window.addEventListener("scroll", checkScroll);
  checkScroll();

  // When the fixed Contact button is clicked, smoothly scroll to the footer
  const contactBtn = document.querySelector(".contact-fixed");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
  }
});

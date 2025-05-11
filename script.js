document.addEventListener("DOMContentLoaded", () => {
  // Reveal achievement cards and skills buttons on scroll
  const achievementCards = document.querySelectorAll(".achievement-card");
  const checkScroll = () => {
    achievementCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add("visible");
      }
    });
    
    // Reveal skills buttons when the skills container scrolls into view
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
  
  // When the fixed Contact button is pressed, scroll to the footer and highlight the footer links
  const contactBtn = document.querySelector(".contact-fixed");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
      const footerLinks = document.querySelector(".footer-links");
      footerLinks.classList.add("highlight");
      setTimeout(() => {
        footerLinks.classList.remove("highlight");
      }, 2000);
    });
  }
});

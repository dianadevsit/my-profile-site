// Fade-in on scroll with staggered delay
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a small delay based on the section's order
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // 150ms delay between each
      }
    });
  });
  
  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  
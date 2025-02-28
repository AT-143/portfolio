// Animation observer utility to handle scroll animations
export const setupAnimationObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  // Observe all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));
  
  // Initialize skill bars when skills section is visible
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('[data-width]');
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width && bar instanceof HTMLElement) {
                bar.style.width = width;
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    skillObserver.observe(skillsSection);
  }
  
  return () => {
    animatedElements.forEach((el) => observer.unobserve(el));
    if (skillsSection) {
      observer.unobserve(skillsSection);
    }
  };
};
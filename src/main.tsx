import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize skill bars when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(
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
  
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
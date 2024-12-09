import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  gsap.utils.toArray('.animate-section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power2.out', 
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',         
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
        once: true 
      }
    });
  });
}
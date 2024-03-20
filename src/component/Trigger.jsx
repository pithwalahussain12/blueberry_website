import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '@react-gsap/scroll-trigger';

const SmoothScrollComponent = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = scrollContainerRef.current;
    const sections = container.querySelectorAll('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        onToggle: self => {
          const sectionIndex = self.vars.index;
          if (self.isActive) {
            // Smooth scroll to the active section
            gsap.to(container, {
              scrollTo: {
                y: sectionIndex * container.clientHeight,
                autoKill: false,
              },
              duration: 1,
            });
          }
        },
      });
    });
  }, []);

  return (
    <div ref={scrollContainerRef} className="scroll-container">
      <div className="section" style={{ height: '100vh', backgroundColor: 'red' }}>
        Section 1
      </div>
      <div className="section" style={{ height: '100vh', backgroundColor: 'green' }}>
        Section 2
      </div>
      <div className="section" style={{ height: '100vh', backgroundColor: 'blue' }}>
        Section 3
      </div>
    </div>
  );
};

export default SmoothScrollComponent;

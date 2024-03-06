import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const Scroll = () => {
  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.03,
      plugins: {
        overscroll: {
          ...OverscrollPlugin,
          options: {
            enable: true,
            damping: 0.1,
            effect: 'bounce',
            maxOverscroll: 150,
            offset: 100

          }
        }
      }
    });

    // Update position fixed elements when scrollbar updates
    bodyScrollBar.addListener(({ offset }) => {
      document.querySelectorAll('[data-fixed]').forEach(element => {

        element.style.top = `${offset.y}px`;
      });
      document.querySelectorAll('[data-sticky]').forEach(element => {
        element.style.top = `${offset.y}px`;
      });
    });

    return () => {
      bodyScrollBar.destroy();
    };
  }, []);

  return null;
};

export default Scroll;

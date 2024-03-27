import React, { useEffect, useState,  useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import AnimatedCursor from 'react-animated-cursor'; // Import AnimatedCursor library


const Scroll = () => {
  // const headerRef = useRef(null);
  const [cursorColor, setCursorColor] = useState('0,0,0'); // Initial cursor color

  useEffect(() => {
    const bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.03,
      plugins: {
        overscroll: {
          ...OverscrollPlugin,
          options: {
            enable: true,
            damping: 0.2,
            effect: 'glow',
            maxOverscroll: 100,
            offset: 100

          }
        }
      }
    });




    // Update position fixed elements when scrollbar updates
    bodyScrollBar.addListener(({ offset }) => {

      document.querySelectorAll('[data-fixed]').forEach(element => {

        element.style.top = `${offset.y}px`;
        element.style.transform = `translate3d(0px, ${offset.y}px, 0px);`;

      });
      document.querySelectorAll('[data-sticky]').forEach(element => {
        element.style.top = `${offset.y}px`;
      });
    });

    return () => {
      bodyScrollBar.destroy();
    };
  }, []);

  



  return (
    <header data-fixed className='header-blurry py-[0.8vw] fixed top-0 left-0 right-0 w-full'>
      <div className='container'>
        <div className='flex justify-between items-center list-section'>
          {/* <div className='logo-main py-4 ml-2'> */}
          <a href='/' className=''>
            <img src='/assets/images/logo.svg' className='h-[3.3vw]' alt='' />
          </a>

          <a href='/contact' className='text-zoomed'>
            Contacts
          </a>

          <a href='/expertises' className='text-zoomed'>
            Expertise
          </a>

          {/*  */}
        

          <a href='/portfolios' className='text-zoomed'>
            Portfolio
          </a>

          <a href="/start" className=' flex items-center border-b-2 border-black text-zoomed'>
            Start Intake


            <svg className="h-[1.1vw] ml-2" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 13.75L13.75 4M13.75 4V13.36M13.75 4H4.39" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </a>
          {/* </div>

      <div> */}

        </div>

      </div>
      {/* </div> */}
     
      <AnimatedCursor
        color={cursorColor}
        innerSize={16}
        outerSize={8}
        trailingSpeed={10}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={9}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}
        clickables={['a', 'button']}
      />

{/* <AnimatedCursor
  color="#fff"
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    mixBlendMode: 'exclusion'
  }}
/> */}


    </header>

  )
};

export default Scroll;

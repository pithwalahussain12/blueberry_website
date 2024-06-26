import React, { useEffect, useState, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import AnimatedCursor from 'react-animated-cursor'; // Import AnimatedCursor library
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'


const Scroll = () => {
  // const headerRef = useRef(null);
  const [cursorColor, setCursorColor] = useState('0,0,0'); // Initial cursor color

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "300px";
  }

  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }


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
    <>
      <div id="mySidenav" className="sidenav">
        <div className='flex justify-between items-center'>
          <h2 className='ml-8 text-3xl font-semibold'>Menu</h2>

          <div>
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </a>
          </div>
        </div>
        <div className='pt-28'>

          <a href='/' className='text-zoomed'>
            Home
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

          <a href="/start" className=' flex items-center text-zoomed'>
            Start Intake



          </a>
        </div>
      </div>

      {/* <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla pt-8 mobile-only-m'
      >
       
      </Drawer> */}
      <header data-fixed className='header-blurry py-[0.8vw] fixed top-0 left-0 right-0 w-full'>
        <div className='container mobile-hidden'>
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


        <div className='lg:hidden'>
          <div className='flex justify-between items-center px-10 py-2'>
            <a href='/' className=''>
              <img src='/assets/images/logo.svg' className='h-[2.3rem]' alt='' />
            </a>

            <button className='' onClick={openNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>

            </button>

          </div>
        </div>

      </header>
    </>

  )
};

export default Scroll;

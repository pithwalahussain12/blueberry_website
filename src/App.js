import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
// import { Scrollbar } from 'smooth-scrollbar-react';
import Startintake from './pages/startintake';
// import AnimatedCursor from "react-animated-cursor"
import ExpertisePage from './pages/Expertise';
// import Portfolio from './component/Portfolio';
import Portfolios from './pages/Portfolio';
// import Scrollbar from 'smooth-scrollbar';
import { useEffect, useState } from 'react';
import Aos from 'aos';
// import SmoothScrollContainer from './component/Smothscolling';
// import useSmoothScroll from './component/Smothscolling';
import Scroll from './component/Smothscolling';

const Loader = () => {
  return <div className="loader">
      <video loop autoPlay muted className='video w-full'>
                <source src='/assets/images/Comp2.mp4' type="video/mp4"></source>
      </video>
  </div>;
};
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second loading time

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);

  }, []); // Empty dependency array ensures effect runs only once
  // Scroll()

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      // delay: 100,
    });
  }, [])


  return (
    <div>
      <Scroll />

      {loading ? (
        <Loader />
      ) : (
        <div className="content">
          {/* Render your main content here */}
          <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='start' element={<Startintake />} />
        <Route path='expertises' element={<ExpertisePage />} />
        <Route path='/portfolios' element={<Portfolios />} />
      </Routes>
        </div>
      )}

   





    </div>
  );
}

export default App;

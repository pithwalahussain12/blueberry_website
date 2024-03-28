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
    }, 2500); // Simulating a 2-second loading time

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);

  }, []); // Empty dependency array ensures effect runs only once
  // Scroll()
  return (
    <div>
      {loading ? (
        <Loader />
        ) : (
          <>
          <Scroll />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='start' element={<Startintake />} />
              <Route path='expertises' element={<ExpertisePage />} />
              <Route path='/portfolios' element={<Portfolios />} />
            </Routes>
        </>
      )}
    </div>
  );
}

export default App;

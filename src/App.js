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
import { useEffect } from 'react';
import Aos from 'aos';
// import SmoothScrollContainer from './component/Smothscolling';
// import useSmoothScroll from './component/Smothscolling';
import Scroll from './component/Smothscolling';



function App() {
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



      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='start' element={<Startintake />} />
        <Route path='expertises' element={<ExpertisePage />} />
        <Route path='/portfolios' element={<Portfolios />} />
      </Routes>





    </div>
  );
}

export default App;

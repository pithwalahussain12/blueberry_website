import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
// import { Scrollbar } from 'smooth-scrollbar-react';
import Startintake from './pages/startintake';
import AnimatedCursor from "react-animated-cursor"
import ExpertisePage from './pages/Expertise';
// import Portfolio from './component/Portfolio';
import Portfolios from './pages/Portfolio';
// import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import Aos from 'aos';
import SmoothScrollContainer from './component/Smothscolling';
import useSmoothScroll from './component/Smothscolling';
import Scroll from './component/Smothscolling';



function App() {
  // Scroll()

  useEffect(() => {
    // Scrollbar.init(document.querySelector('#my-scrollbar'));
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      // delay: 100,
    });
  }, [])

  // useSmoothScroll()

  return (
    <div className="App">
  <Scroll />
      {/* <AnimatedCursor
        innerSize={16}
        outerSize={8}
        trailingSpeed={10}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={9}

        clickables={[
          'a',
          'button',
          // '.list-section a'
        ]}
      /> */}

      {/* <SmoothScrollContainer> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='start' element={<Startintake />} />
          <Route path='expertises' element={<ExpertisePage />} />
          <Route path='/portfolios' element={<Portfolios />} />
        </Routes>

      {/* </SmoothScrollContainer> */}



      {/* </Scrollbar> */}

    </div>
  );
}

export default App;

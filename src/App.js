import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import { Scrollbar } from 'smooth-scrollbar-react';
import Startintake from './pages/startintake';



function App() {
  return (
    <div className="App">
      <Scrollbar
        plugins={{
          overscroll: {
            effect: 'bounce',
          },
        }}>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path='start' element={<Startintake />} />
        </Routes>
      </Scrollbar>

    </div>
  );
}

export default App;

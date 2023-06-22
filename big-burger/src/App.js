import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Herosection/Herosection';
import Carousel from './Components/Carousel/Carousel';
import LocationSection from './Components/LocationSection/LocationSection';
import Socialsection from './Components/Socialsection/Socialsection';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage';
import Eatsection from './Pages/Eatsection';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Herosection />
        <Carousel />
        <LocationSection />
        <Socialsection /> */}
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Eatsection" element={<Eatsection />} />
        </Routes> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;

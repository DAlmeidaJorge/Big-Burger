import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Herosection/Herosection';
import Carousel from './Components/Carousel/Carousel';
import LocationSection from './Components/LocationSection/LocationSection';
import Socialsection from './Components/Socialsection/Socialsection';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      < Navbar />
      < Herosection />
      < Carousel />
      < LocationSection />
      < Socialsection />
      < Footer />

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Herosection from './Components/Herosection/Herosection';
import Carousel from './Components/Carousel/Carousel';
import LocationSection from './Components/LocationSection/LocationSection';


function App() {
  return (
    <div className="App">
      < Navbar />
      < Herosection />
      < Carousel />
      < LocationSection />


    </div>
  );
}

export default App;

import './App.css';
import './main.css';
import Navbar from './Components/Navbar.js';
import Background from './Components/Background.js';
import CustomCarousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <CustomCarousel/>
        <Background/>
    </div>
  );
}

export default App;

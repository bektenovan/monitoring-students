import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Routing from './Routing';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
 <Navbar/>
 <Video />
    <Routing/>
    <HomePage/>
    <Footer />
    </BrowserRouter>

  );
}

export default App;

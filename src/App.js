import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import LoginPage from './Components/LoginPage';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

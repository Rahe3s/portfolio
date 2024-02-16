import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Conatct from './pages/contact/Conatct';
import Home from './pages/home/Home';
import Project from './pages/projects/Project';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

<Navbar/>
      
      <Routes>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="project" element={<Project/>} />
      <Route path="contact" element={<Conatct/>} />
      </Routes> 
    
     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import Testimonials from './testimonials';
import Project from './project';
import Contact from './contact';
import Gallery from './gallery';


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Home/>,<About/>,<Project/>,<Testimonials/>,<Gallery/>,<Contact/>]}/>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/testimonials' element={<Testimonials/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      
      
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

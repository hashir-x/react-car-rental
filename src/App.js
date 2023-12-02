import './App.css';
import ContactFooter from './components/ContactFooter';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Models from './pages/Models';
import Testimonials from './pages/Testimonials';
import Teams from './pages/Teams';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/models' element={<Models/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/team' element={<Teams/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

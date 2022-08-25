import React from 'react';
import Navbar from './components/Navbar';
// import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/games' element={<Games/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer />
      </Router> 
    </>
  );
}

export default App;
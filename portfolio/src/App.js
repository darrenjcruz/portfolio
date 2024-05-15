import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NaviBar from './components/navibar/NaviBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import AboutMe from './pages/aboutMe/AboutMe';
import Projects from './pages/projects/Projects';
import ContactMe from './pages/contactMe/ContactMe';
import './App.css';

// const colors = {'Emerald': '86CB92', 'Mint': '71B48D', 'YlnMn Blue': '404E7C', 'Space Cadet': '251F47', 'Dark Purple': '260F26'}

function App() {
    return (
        <BrowserRouter>
            <NaviBar />
            
            <div className='body'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='/Projects' element={<Projects />} />
                    <Route path='/ContactMe' element={<ContactMe />} />
                </Routes>
            </div>
            
            <Footer />
        </BrowserRouter>
    );
}

export default App;
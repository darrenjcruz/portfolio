// App.js

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NaviBar from './components/navibar/NaviBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import AboutMe from './pages/aboutMe/AboutMe';
import Projects from './pages/projects/Projects';
import ContactMe from './pages/contactMe/ContactMe';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            {/* Navigation Bar */}
            <NaviBar />
            
            {/* Main Content */}
            <div className='body'>
                <Routes>
                    {/* Routes */}
                    <Route path='/' element={<Home />} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='/Projects' element={<Projects />} />
                    <Route path='/ContactMe' element={<ContactMe />} />
                </Routes>
            </div>
            
            {/* Footer */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;

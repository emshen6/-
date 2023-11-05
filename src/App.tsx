import React from 'react';
import { Navmenu } from './components/Navmenu';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Contacts } from './pages/Contacts';

const App = () => (
    <React.Fragment>
        <Navmenu />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    </React.Fragment>
);
export default App;
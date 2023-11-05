import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navmenu.css';

export const Navmenu = () => (
    <React.Fragment>
        <div className="menu">
            <div className="titlename">PAVEL KOCHETKOV</div>
            <div className="navmenuright" />
            <NavLink to="/" className="activ">
                Главная
            </NavLink>
            <NavLink to="/about" className="activ">
                Обо мне
            </NavLink>
            <NavLink to="/skill" className="activ">
                Навыки
            </NavLink>
            <NavLink to="/contacts" className="activ">
                Контакты
            </NavLink>
        </div>
        <hr className="hr" />
    </React.Fragment>
);
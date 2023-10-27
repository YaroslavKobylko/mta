import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const location = useLocation();
    const activePath = location.pathname;

    useEffect(() => {
        // Зараз знайдіть всі .nav-item і видаліть класи is-active-*
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item) => {
            item.classList.remove('is-active-orange');
            item.classList.remove('is-active-green');
            item.classList.remove('is-active-blue');
            item.classList.remove('is-active-rebeccapurple');
        });

        // Тепер знайдіть .nav-item, який відповідає активному шляху та додайте йому відповідний клас is-active-*
        const activeNavItem = document.querySelector(`.nav-item[href='${activePath}']`);
        if (activeNavItem) {
            const color = activeNavItem.getAttribute('data-color');
            activeNavItem.classList.add(`is-active-${color}`);
        }
    }, [activePath]);

    return (
        <nav className="nav">
            <Link to='/home' className="nav-item" data-color="orange">Home</Link>
            <Link to="/statistics" className="nav-item" data-color="blue">Statistics</Link>
            <Link to='/about' className="nav-item" data-color="green">About</Link>
            <Link to='/login' className="nav-item" data-color="rebeccapurple">Login</Link>
            <span className="nav-indicator"></span>
        </nav>
    );
}

export default Navigation;
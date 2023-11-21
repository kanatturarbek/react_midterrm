import './Header.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <header className="menu">
            <div className="logo">Journal Articles</div>
            <nav>
                <ul className="menu1">
                    <li className="menu-li"><NavLink to="/"  className="link">Home</NavLink></li> 
                </ul>
            </nav>  
        </header>
    )
}

export default Header;
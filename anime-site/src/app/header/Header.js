import './Header.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <header className="menu">
            <div className="logo">KBTUAnime</div>
            <nav>
                <ul className="menu1">
                    <li className="menu-li"><NavLink to="/"  className="link">Home</NavLink></li> 
                    <li className="menu-li"><a href="/anime" className="link">Аниме</a></li>   
                    <li className="menu-li"><NavLink to="/movies" className="link">Фильмы</NavLink></li>   
                    <li className="menu-li"><a href="https://t.me/kanuttz" className="link">KBTUAnime 2023</a></li>   
                </ul>
            </nav>  
        </header>
    )
}

export default Header;
import { NavLink } from 'react-router-dom'
import './Header.css'
import React from 'react'

export const Header = () => {
    return(
        <header className="menu">
            <div className="logo">NurAnime</div>
            <nav>
                <ul className="menu1">
                    <li className="menu-li"><NavLink to="/"  className="link">Home</NavLink></li> 
                    <li className="menu-li"><a href="/Main" className="link">Аниме</a></li>   
                    <li className="menu-li"><NavLink to="/movies" className="link">Фильмы</NavLink></li>   
                    <li className="menu-li"><a href="#title4" className="link">©NurAnime 2022</a></li>   
                </ul>
            </nav>  
        </header>
    )
}

export default Header;
import React from 'react'
import './Main.css'

function Main(props) {
    return (
        <div>
            <Home 
                classname = {`${props.page.page == 'Home' ? 'open' : 'closed'}`} 
                setPage = {props.page.setPage}
            />
            <AnimeList 
                classname = {`${page == 'AnimeList' ? 'open' : 'closed'}`} 
                setPage = {props.page.setPage}
            />
            <MoviesList 
                classname = {`${page == 'MoviesList' ? 'open' : 'closed'}`} 
                setPage = {props.page.setPage}
            />
            <Shop
                classname = {`${page == 'Shop' ? 'open' : 'closed'}`} 
                setPage = {props.page.setPage}
            />
        </div>
    )
}

export default Main;
import React from 'react'
import './Main.css'

function Main() {
    const [page, setPage] = useState('Home')

    return (
        <div>
            <Home classname = {`${page == 'Home' ? 'open' : 'closed'}`} setPage = {this.setPage}/>
            <AnimeList classname = {`${page == 'AnimeList' ? 'open' : 'closed'}`} setPage = {this.setPage}/>
            <MoviesList classname = {`${page == 'MoviesList' ? 'open' : 'closed'}`} setPage = {this.setPage}/>
            <Shop classname = {`${page == 'Shop' ? 'open' : 'closed'}`} setPage = {this.setPage}/>
        </div>
    )
}
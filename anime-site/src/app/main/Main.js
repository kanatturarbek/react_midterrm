import React from 'react'
import { BrowserRouter, redirect, Route, Router, Routes } from 'react-router-dom';
import AnimeList from './anime_list/AnimeList';
import Home from './home/Home';
import './Main.css'
import MoviesList from './movies_list/MovieList';
import Shop from './shop/Shop';

function Main(props) {
    return (
        <div>
            <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/home' element = {<Home/>}/>
                <Route exact path='/anime' element = {<AnimeList/>}/>
                <Route exact path='/movies' element = {<MoviesList/>}/>
                <Route exact path='/shop' element = {<Shop/>}/>
            </Routes>
        </div>
    )
}

export default Main;
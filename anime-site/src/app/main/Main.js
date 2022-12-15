import React from 'react'
import { BrowserRouter, redirect, Route, Router, Routes } from 'react-router-dom';
import AnimeList from './anime_list/AnimeList';
import Home from './home/Home';
import './Main.css'
import MoviesList from './movies_list/MovieList';
import Shop from './shop/Shop';
import VideoScreen from './video_screen/VideoScreen';

function Main(props) {
    return (
        <>
        <div className='back'>
            <Routes>
                <Route exact path='/' element = {<Home/>}/>
                <Route exact path='/home' element = {< Home/>}/>
                <Route exact path='/anime' element = {<AnimeList/>}/>
                <Route path='/anime/:id' element = {<VideoScreen title = "anime"/>}/>
                <Route exact path='/movies' element = {<MoviesList/>}/>
                <Route path='/movies/:id' element = {<VideoScreen title = "movies"/>}/>
                <Route exact path='/shop' element = {<Shop/>}/>
            </Routes>
            <div className='footer_img1'>
                    <div className='footer2'></div>
                    <div className='footer1'></div>
            </div>
        </div>
        </>
    )
}

export default Main;
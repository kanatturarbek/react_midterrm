import React from 'react'
import { BrowserRouter, redirect, Route, Router, Routes } from 'react-router-dom';
import Home from './home/Home';
import './Main.css'
import MoviesList from './post_list/Post';
import Shop from './shop/Shop';
import VideoScreen from './video_screen/VideoScreen';

function Main(props) {
    return (
        <>
        <div className='back'>

            
            <Routes>
                <Route exact path='/' element = {<MoviesList/>}/>
                <Route exact path='/:id' element = {<VideoScreen title = "movies"/>}/>

                <Route exact path='/movies' element = {<MoviesList/>}/>
                <Route path='/movies/:id' element = {<VideoScreen title = "movies"/>}/>
                <Route exact path='/shop' element = {<Shop/>}/>
            </Routes>

        </div>
        </>
    )
}

export default Main;
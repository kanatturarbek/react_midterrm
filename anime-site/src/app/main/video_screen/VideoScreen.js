import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { database_anime } from '../database_anime';
import { database_movies} from '../database_movies';
import './VideoScreen.css';

function VideoScreen(props) {

    let params = useParams();

    let database = [];
    
    const [episode, setEpisode] = useState(0);

    if(props.title == 'anime') {
        database = database_anime;
    } else if(props.title == 'movies'){
        database = database_movies;
    } else {
        return (
            <h1>ERROR</h1>
        )
    }

    let episodes = [];

    for(let i = 0; i <database[params.id].seasons.length; i ++) {
        episodes.push(<div className = 'button' onClick = {() => setEpisode(i)} key = {i}>{i}</div>);
    }

    return (
        <div>
            <div className = 'upper'>
                <img className='season_image' src = {database[params.id].img}/>
                <div className = 'description'>{database[params.id].description}</div>
            </div>
            <div className = 'buttons'>{episodes}</div>
            <div className = 'video'>{database[params.id].seasons[episode].description}</div>
        </div>
    )
}

export default VideoScreen;
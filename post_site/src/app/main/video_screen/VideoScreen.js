import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { database_posts} from '../database_posts';
import './VideoScreen.css';
import { likeCounter } from '../section/like_counter/LikeCounter';

function VideoScreen(props) {

    let params = useParams();

    let database = [];
    
    const [episode, setEpisode] = useState(0);

    if(props.title == 'anime') {

        
      //  database = database_anime;
    } else if(props.title == 'movies'){
        database = database_posts;
    } else {
        return (
            <h1>ERROR</h1>
        )
    }

    let episodes = [];
    try {
        for(let i = 0; i <database[params.id].seasons.length; i ++) {
            episodes.push(<div className = 'button' onClick = {() => setEpisode(i)} key = {i}>{i + 1}</div>);
        }
        return (
            <div>
                <div className = 'upper'>
                    <img className='season_image' src = {database[params.id].img}/>
                    <div className='fon2'>
                        <h1>Name: {database[params.id].name}</h1>
                        <p>Автор: {database[params.id].author}</p>
                        <div className = 'description'><p>Описание:  {database[params.id].description}</p></div>
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        return (
            <div>
                <div className = 'upper'>
                    <img className='season_image' src = {database[params.id].img}/>
                    <div className='fon2'>
                        <h1>Name: {database[params.id].name}</h1>
                        <p>Автор:  {database[params.id].author}</p>
                        <p>Ключевые слова:  {database[params.id].keywords}</p>
                        <div className = 'description'><p>Описание:  {database[params.id].description}</p></div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default VideoScreen;
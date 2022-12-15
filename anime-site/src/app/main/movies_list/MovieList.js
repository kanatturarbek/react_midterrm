import React from 'react';
import Section from '../section/Section';
import './MovieList.css';
import { database_movies } from '../database_movies.js';

function MovieList(props) {

    const rows = []

    for(let i = 0; i < 11; i ++) {
        rows.push(
        <div className='section'>
            <Section  
                className="section" 
                key = {i} 
                id = {i} 
                src = {database_movies[i]['img']}
                title = {database_movies[i]['name']}
            />
        </div>
        );
    }

    return (<div className='list'>{rows}</div>);
}

export default MovieList;
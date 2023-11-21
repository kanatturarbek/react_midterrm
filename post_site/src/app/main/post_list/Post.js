import React from 'react';
import Section from '../section/Section';
import './Post.css';
import { database_posts} from '../database_posts.js';

function MovieList(props) {

    const rows = []



    for(let i = 0; i < 11; i ++) {
        rows.push(
        <div className='section'>
            <Section  

            
                className="section" 
                key = {i} 
                id = {i} 
                src = {database_posts[i]['img']}
                title = {database_posts[i]['name']}
            />
        </div>
        );
    }

    return (<div className='list'>{rows}</div>);
}

export default MovieList;
import React from 'react';
import Section from '../section/Section';
import './AnimeList.css';
import { database_anime } from './database_anime.js';

function AnimeList(props) {

    const rows = []

    console.log(database_anime)

    for(let i = 0; i < 4; i ++) {
        rows.push(<Section className="section" key = {i} title = {database_anime[i]['name']} img = {database_anime[i].img}/>);
    }

    return <div className='list'>{rows}</div>;
}

export default AnimeList;
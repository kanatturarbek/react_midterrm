import React from 'react'
import './AnimeList.css'

function AnimeList(props) {

    const rows = []

    for(let i = 0; i < 10; i ++) {
        rows.push(<Section id = {i}/>);
    }

    return (
        {
            rows
        }
    )
}

export default AnimeList;
import React from 'react'
import { Link } from 'react-router-dom'
import './Section.css'

function Section(props) {
    console.log(props)
    return (
        <>
        <Link to = {'' + props.id}>
            <div className = "container">
                <img className = "container" src = {props.src}/>
                <div className='title'>{props.title}</div>
            </div>
        </Link>
        </>
    )
    
}

export default Section;
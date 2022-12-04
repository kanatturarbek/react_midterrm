import React from 'react'
import './Section.css'

function Section(props) {

    const picUrl = props.data.series[props.id].picUrl
    const title = props.data.series[props.id].title

    return (
        <div>
            <img url = {picUrl}></img>
            <h2>{title}</h2>
        </div>
    )
}

export default Section;
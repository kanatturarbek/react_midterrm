import React, { useEffect, useState } from 'react'
import './Section.css'

function Section(props) {

    return (
        <Link to='/mov_5'>
            <div className='M_1'>
                <img src={moves.img.img5} className='M_1'  alt="" />
                <div className='m_1'>Гангстер коп и Дьявол</div>
            </div>
        </Link>
    )
}

export default Section;
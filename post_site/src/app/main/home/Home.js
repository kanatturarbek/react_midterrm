import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

import './Home.css'

function Home(props) {

    const [request, setRequest] = useState({});


        React.useEffect(() => { // Pass in a callback function!
        
        
            fetch('91.185.30.130:5000/api').
        then((request) => request.json()).
        then((request) => {setRequest(request)})
        .then((res) => res.json())
        });

    console.log(request);

    return (
        <h1>LOLOL</h1>
    )
}

export default Home;
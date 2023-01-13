import React from 'react'
import Video from './../Assets/hero.mp4'
import './Home.css'
function Home() {
    return (
        <div className="image" id="home">
            <video class="vidio" autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home
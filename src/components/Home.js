import React from 'react';
import ImageSlider from './ImageSlider';
import Description from './Description';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <ImageSlider />
            <Description />
        </div>
    )
}

export default Home

import React from 'react';
import VidComp from './VidComp';
import Navbar from './Navbar';
import Button from './Button';
import './css/Component.css';


const Home = ()=>{
    return(
        <div className="container">
            <Navbar />
            <div className='video-sec'>
                <h2>iPhone 15 Pro</h2>
                <VidComp />
            </div>
            <Button class="buy-btn" value="Buy" />
        </div>
    );
}

export default Home;
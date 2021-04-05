import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3" style={{ paddingTop: '20px' }}> <img alt='logo' src={brain} /> </div>
                <p className="f6"> <a href="https://icons8.com/icons/set/brain">Brain icon</a> icon by <a href='https://icons8.com/'>Icons8</a></p>
            </Tilt>
        </div>
    );
}

export default Logo;
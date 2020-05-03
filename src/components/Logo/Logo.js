import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="z1">
      <div className='ma4 mt0 z1'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <div className="Tilt-inner pa3">
            <img style={{paddingTop:'23px'}} alt='logo' src={brain}/>
          </div>
        </Tilt>
      </div>
    </div>
  )
}
export default Logo;

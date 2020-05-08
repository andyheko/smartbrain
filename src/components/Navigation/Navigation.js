import React from 'react';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-start'}}>
      <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa5 pointer z1'>Sign Out</p>
    </nav>
  )
}
export default Navigation;

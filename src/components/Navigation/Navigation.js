import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn){
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa5 pointer z1'>Sign Out</p>
      </nav>
    )
  } else {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa5 pointer z1'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa5 pointer z1'>Register</p>
      </nav>
    )
  }

}
export default Navigation;

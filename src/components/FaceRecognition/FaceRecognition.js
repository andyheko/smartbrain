import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  console.log('check', imageUrl)
  return (
    <div className='center ma'>
      <div className='absolute mt2 z1'>
        <img alt='' src={imageUrl} width='500px' height='auto'/>
      </div>
    </div>
  );
}
export default FaceRecognition;

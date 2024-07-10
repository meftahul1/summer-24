import React from 'react'
import PostStatus from './common/PostUpdate/PostStatus';



export default function Homecomponent() {

    const handleButtonClick = () => {
        window.open('https://www.cuny.edu/', '_blank');
    }
  return (

    <div className='home-component'>
      <PostStatus />
    </div>
    
  );
}

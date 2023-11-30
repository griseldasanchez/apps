import React from 'react';

// Styles
import './Home.css';

export default function Home() {
  return (
   <div id="home-page">
      <div>This is the Home Page.</div>
      <div className="home-header">
        <div className='home-information'>
          Information section. 
        </div>
        <div className="profile-picture">
          Profile Picture.
        </div>
      </div>
   </div>
  )
}
import React from 'react'
import video from './images/video.mp4'
const Page = () => {
  return (
    <div className='home-vid'>
        <video autoPlay loop muted playsInline>
          <source src={video} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Page

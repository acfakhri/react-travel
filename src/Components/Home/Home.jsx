import React from 'react'
import './home.css'
import video from '../../Asset/bluesky.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type='video/mp4'></video>

      <div className='homeContent container' >
        <div className='textDiv' >

          <span className='smallText'>
            Our Package
          </span>

          <h1 className='homeTitle'>Search your waifu</h1>
          
        </div>

        <div className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination
            </label>

            <div className='input flex'>
              <input class="input" type="text" placeholder="Enter name here..." />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Home

import { useState } from 'react'
import './Video/Video.css'
import './App.css'
import Video from './Video/Video.jsx'
import { VIDEOS } from './Video/Videos.js'


function App() {
  return (
    <>
      <div className='video-container'>
      {VIDEOS.map((video) => (
        <Video key={video.id} title={video.title} description= {video.description} img= {video.img} /> 
      ))}
      </div>
    </>
  )
}

export default App
